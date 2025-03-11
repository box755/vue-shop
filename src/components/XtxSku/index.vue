<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.id">
      <dt>{{ item.name }}</dt>
      <dd>
        <template v-for="val in item.values" :key="val.name">
          <img :class="{ selected: val.selected, disabled: val.disabled }" @click="clickSpecs(item, val)"
               v-if="val.picture" :src="val.picture" />
          <span :class="{ selected: val.selected, disabled: val.disabled }" @click="clickSpecs(item, val)" v-else>{{
              val.name
            }}</span>
        </template>
      </dd>
    </dl>
  </div>
</template>
<script>
import { watchEffect } from 'vue'
import getPowerSet from './power-set'
const spliter = '★'
// 根據 skus 數據獲取路徑字典對象
const getPathMap = (skus) => {
  const pathMap = {}
  if (skus && skus.length > 0) {
    skus.forEach(sku => {
      // 1. 過濾出有庫存有效的 sku
      if (sku.inventory) {
        // 2. 獲取 sku 屬性值數組
        const specs = sku.specs.map(spec => spec.valueName)
        // 3. 獲取 sku 屬性值數組的子集
        const powerSet = getPowerSet(specs)
        // 4. 設置給路徑字典對象
        powerSet.forEach(set => {
          const key = set.join(spliter)
          // 如果沒有就先初始化一個空數組
          if (!pathMap[key]) {
            pathMap[key] = []
          }
          pathMap[key].push(sku.id)
        })
      }
    })
  }
  return pathMap
}

// 初始化禁用狀態
function initDisabledStatus (specs, pathMap) {
  if (specs && specs.length > 0) {
    specs.forEach(spec => {
      spec.values.forEach(val => {
        // 設置禁用狀態
        val.disabled = !pathMap[val.name]
      })
    })
  }
}

// 獲取當前選中規格集合
const getSelectedArr = (specs) => {
  const selectedArr = []
  specs.forEach((spec, index) => {
    const selectedVal = spec.values.find(val => val.selected)
    if (selectedVal) {
      selectedArr[index] = selectedVal.name
    } else {
      selectedArr[index] = undefined
    }
  })
  return selectedArr
}

// 更新按鈕的禁用狀態
const updateDisabledStatus = (specs, pathMap) => {
  // 遍歷每一種規格
  specs.forEach((item, i) => {
    // 獲取當前選擇的項目
    const selectedArr = getSelectedArr(specs)
    // 遍歷每一個按鈕
    item.values.forEach(val => {
      if (!val.selected) {
        selectedArr[i] = val.name
        // 去掉 undefined 之後組合成 key
        const key = selectedArr.filter(value => value).join(spliter)
        val.disabled = !pathMap[key]
      }
    })
  })
}


export default {
  name: 'XtxGoodSku',
  props: {
    // specs: 所有的規格信息  skus: 所有的 sku 組合
    goods: {
      type: Object,
      default: () => ({ specs: [], skus: [] })
    }
  },
  emits: ['change'],
  setup (props, { emit }) {
    let pathMap = {}
    watchEffect(() => {
      // 獲取所有字典集合
      pathMap = getPathMap(props.goods.skus)
      // 組件初始化的時候更新禁用狀態
      initDisabledStatus(props.goods.specs, pathMap)
    })

    const clickSpecs = (item, val) => {
      if (val.disabled) return false
      // 選中與取消選中邏輯
      if (val.selected) {
        val.selected = false
      } else {
        item.values.forEach(bv => { bv.selected = false })
        val.selected = true
      }
      // 點擊之後再次更新選中狀態
      updateDisabledStatus(props.goods.specs, pathMap)
      // 把選擇的 sku 信息傳出去給父組件
      // 觸發 change 事件將 sku 數據傳遞出去
      const selectedArr = getSelectedArr(props.goods.specs).filter(value => value)
      // 如果選中的規格數量和傳入的規格總數相等則傳出完整信息(都選擇了)
      // 否則傳出空對象
      if (selectedArr.length === props.goods.specs.length) {
        // 從路徑字典中獲取 skuId
        const skuId = pathMap[selectedArr.join(spliter)][0]
        const sku = props.goods.skus.find(sku => sku.id === skuId)
        // 傳遞數據給父組件
        emit('change', {
          skuId: sku.id,
          price: sku.price,
          oldPrice: sku.oldPrice,
          inventory: sku.inventory,
          specsText: sku.specs.reduce((p, n) => `${p} ${n.name}：${n.valueName}`, '').trim()
        })
      } else {
        emit('change', {})
      }
    }
    return { clickSpecs }
  }
}
</script>

<style scoped lang="scss">
@mixin sku-state-mixin {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;

  &.selected {
    border-color: $xtxColor;
    box-shadow: 0 0 3px rgba($xtxColor, 0.5);
  }

  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}

.goods-sku {
  padding-left: 10px;
  padding-top: 20px;

  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;

    dt {
      width: 50px;
      color: #999;
      font-weight: 500;
    }

    dd {
      flex: 1;
      color: #666;

      >img {
        width: 50px;
        height: 50px;
        margin-bottom: 4px;
        object-fit: cover;
        @include sku-state-mixin;
      }

      >span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        margin-bottom: 4px;
        @include sku-state-mixin;

        &:hover:not(.disabled) {
          background-color: #f5f5f5;
        }
      }
    }
  }
}
</style>
