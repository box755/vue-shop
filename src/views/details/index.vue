<script setup>
import {onMounted} from "vue";
import {ref} from "vue";
import { useRoute } from "vue-router"

const route = useRoute()

import { getGoodsDetailAPI } from "@/apis/getGoodsDetailAPI.js";

import DetailHot from "@/views/details/components/DetailHot.vue";

const goodsDetail = ref({})

const getGoodsDetail = async() => {
  console.log(route.params.id)

  const data  = await getGoodsDetailAPI(route.params.id)
  console.log(goodsDetail)
  goodsDetail.value = data.result
}

// 監聽sku組件變化
const onChange = (value) => {
  console.log(value)
}

onMounted(() => {
  getGoodsDetail()

})


</script>

<template>
  <div class="xtx-goods-page" v-if="goodsDetail.details">
    <div class="container">
<!--      麵包導航-->
      <div class="bread-container">
        <el-breadcrumb separator=">">

<!--          需使用?.，避免響應式變量在還沒取得資料前，無法讀取其category成員-->
          <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: `/category/${goodsDetail.categories[1].id}` }">{{ goodsDetail.categories[1].name }}
          </el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: `/category/sub/${goodsDetail.categories[0].id}` }">
            {{ goodsDetail.categories[0].name }}
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ goodsDetail.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 商品信息 -->
      <div class="info-container">
        <div>
          <div class="goods-info">
            <div class="media">
              <!-- 圖片預覽覽區，傳入主圖片陣列 -->
              <imageView :imageList="goodsDetail.mainPictures"/>
              <!-- 統計數量 -->
              <ul class="goods-sales">
                <li>
                  <p>銷量人氣</p>
                  <p> {{ goodsDetail.salesCount }}+ </p>
                  <p><i class="iconfont icon-task-filling"></i>銷量人氣</p>
                </li>
                <li>
                  <p>商品評價</p>
                  <p>{{ goodsDetail.commentCount }}+</p>
                  <p><i class="iconfont icon-comment-filling"></i>商品評價</p>
                </li>
                <li>
                  <p>收藏人氣</p>
                  <p>{{ goodsDetail.collectCount }}+</p>
                  <p><i class="iconfont icon-favorite-filling"></i>收藏人氣</p>
                </li>
                <li>
                  <p>品牌訊息</p>
                  <p>{{ goodsDetail.brand.name }}</p>
                  <p><i class="iconfont icon-dynamic-filling"></i>品牌訊息</p>
                </li>
              </ul>
            </div>
            <div class="spec">
              <!-- 商品訊息區 -->
              <p class="g-name"> {{ goodsDetail.name}} </p>
              <p class="g-desc">{{ goodsDetail.desc }} </p>
              <p class="g-price">
                <span>{{ goodsDetail.price }}</span>
                <span> {{ goodsDetail.oldPrice }}</span>
              </p>
              <div class="g-service">
                <dl>
                  <dt>促銷</dt>
                  <dd>3月好物放送，買一送十</dd>
                </dl>
                <dl>
                  <dt>服務</dt>
                  <dd>
                    <span>退貨無憂</span>
                    <span>快速退款</span>
                    <span>免運費</span>
                    <a href="javascript:;">了解詳情</a>
                  </dd>
                </dl>
              </div>
              <!-- sku组件 -->
              <Sku :goods="goodsDetail" @change="onChange"/>


              <!-- 数据组件 -->

              <!-- 按钮组件 -->
              <div>
                <el-button size="large" class="btn">
                  加入購物車
                </el-button>
              </div>

            </div>
          </div>
          <div class="goods-footer">
            <div class="goods-article">
              <!-- 商品詳情 -->
              <div class="goods-tabs">
                <nav>
                  <a>商品詳情</a>
                </nav>
                <div class="goods-detail">
                  <!-- 屬性 -->
                  <ul class="attrs">
                    <li v-for="item in goodsDetail.details.properties" :key="item.value">
                      <span class="dt">{{ item.name }}</span>
                      <span class="dd">{{ item.value}}</span>
                    </li>
                  </ul>
                  <!-- 詳細提片 -->
                  <img v-for="img in goodsDetail.details.pictures" :src="img" :key="img" />

                </div>
              </div>
            </div>
            <!-- 24熱門榜＋專題推薦 -->
            <div class="goods-aside">
            <DetailHot :hotType="1"/>
            <DetailHot :hotType="2"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.xtx-goods-page {
  .goods-info {
    min-height: 600px;
    background: #fff;
    display: flex;

    .media {
      width: 580px;
      height: 600px;
      padding: 30px 50px;
    }

    .spec {
      flex: 1;
      padding: 30px 30px 30px 0;
    }
  }

  .goods-footer {
    display: flex;
    margin-top: 20px;

    .goods-article {
      width: 940px;
      margin-right: 20px;
    }

    .goods-aside {
      width: 280px;
      min-height: 1000px;
    }
  }

  .goods-tabs {
    min-height: 600px;
    background: #fff;
  }

  .goods-warn {
    min-height: 600px;
    background: #fff;
    margin-top: 20px;
  }

  .number-box {
    display: flex;
    align-items: center;

    .label {
      width: 60px;
      color: #999;
      padding-left: 10px;
    }
  }

  .g-name {
    font-size: 22px;
  }

  .g-desc {
    color: #999;
    margin-top: 10px;
  }

  .g-price {
    margin-top: 10px;

    span {
      &::before {
        content: "NT$";
        font-size: 14px;
      }

      &:first-child {
        color: $priceColor;
        margin-right: 10px;
        font-size: 22px;
      }

      &:last-child {
        color: #999;
        text-decoration: line-through;
        font-size: 16px;
      }
    }
  }

  .g-service {
    background: #f5f5f5;
    width: 500px;
    padding: 20px 10px 0 10px;
    margin-top: 10px;

    dl {
      padding-bottom: 20px;
      display: flex;
      align-items: center;

      dt {
        width: 50px;
        color: #999;
      }

      dd {
        color: #666;

        &:last-child {
          span {
            margin-right: 10px;

            &::before {
              content: "•";
              color: $xtxColor;
              margin-right: 2px;
            }
          }

          a {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .goods-sales {
    display: flex;
    width: 400px;
    align-items: center;
    text-align: center;
    height: 140px;

    li {
      flex: 1;
      position: relative;

      ~li::after {
        position: absolute;
        top: 10px;
        left: 0;
        height: 60px;
        border-left: 1px solid #e4e4e4;
        content: "";
      }

      p {
        &:first-child {
          color: #999;
        }

        &:nth-child(2) {
          color: $priceColor;
          margin-top: 10px;
        }

        &:last-child {
          color: #666;
          margin-top: 10px;

          i {
            color: $xtxColor;
            font-size: 14px;
            margin-right: 2px;
          }

          &:hover {
            color: $xtxColor;
            cursor: pointer;
          }
        }
      }
    }
  }
}

.goods-tabs {
  min-height: 600px;
  background: #fff;

  nav {
    height: 70px;
    line-height: 70px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;

    a {
      padding: 0 40px;
      font-size: 18px;
      position: relative;

      >span {
        color: $priceColor;
        font-size: 16px;
        margin-left: 10px;
      }
    }
  }
}

.goods-detail {
  padding: 40px;

  .attrs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;

    li {
      display: flex;
      margin-bottom: 10px;
      width: 50%;

      .dt {
        width: 100px;
        color: #999;
      }

      .dd {
        flex: 1;
        color: #666;
      }
    }
  }

  >img {
    width: 100%;
  }
}

.btn {
  margin-top: 20px;

}

.bread-container {
  padding: 25px 0;
}
</style>
