<script setup>
// 可以添加分类数据
import {useCategoryStore} from "@/stores/category.js";
import {toRef} from "vue";

// 使用pinia獲取類別資料
const store = useCategoryStore()
const categoryList = toRef(store, 'categoryList'); // 保持響應性


</script>

<template>
  <div class="home-category" >
    <ul class="menu">
<!--      使用雙層for loop，第一層解析類別對象，第二層解析類別對象的children和goods-->
      <li v-for="item in categoryList" :key="item.id" class="menu-item">
        <div class="menu-header">
<!--          RouterLink類次 a，但不會重加載，只在前端路由-->
          <RouterLink to="/" class="primary-link">
            <span class="category-icon"></span>
            {{ item.name }}
          </RouterLink>
          <div class="sub-links">
            <RouterLink v-for="i in item.children.slice(0, 2)" :key="i" to="/" class="sub-link">
              {{ i.name }}
            </RouterLink>
          </div>
        </div>

        <div class="layer">
          <div class="layer-header">
            <h4>分類推薦</h4>
            <span class="recommendation-tag">根據您的瀏覽紀或購買錄推薦</span>
          </div>

          <div class="product-grid">
            <div v-for="i in item.goods" :key="i.id" class="product-card">
              <RouterLink :to="`/detail/${item.id}`">
                <div class="product-image">
                  <img :src="i.picture" alt="商品图片" />
                </div>
                <div class="product-info">
                  <h5 class="product-name ellipsis-2">{{ i.name}}</h5>
                  <p class="product-desc ellipsis">{{ i.desc }}</p>
                  <div class="product-price">
                    <span class="currency">NT$</span>
                    <span class="amount">{{ i.price}}</span>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.home-category {
  width: 270px;
  height: 560px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8));
  position: relative;
  z-index: 99;
  border-radius: 8px 0 0 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &.is-sticky {
    position: fixed;
    top: 0;
  }

  .menu {
    .menu-item {
      padding: 1px 20px;
      transition: all 0.3s ease;

      &:hover {
        background: linear-gradient(90deg, $xtxColor, lighten($xtxColor, 10%));
        transform: translateX(30px);
      }

      .menu-header {
        height: 60px;
        display: flex;
        align-items: center;

        .primary-link {
          display: flex;
          align-items: center;
          font-size: 16px;
          color: #fff;
          font-weight: 500;

          .category-icon {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
          }
        }

        .sub-links {
          margin-left: 15px;
          display: flex;
          gap: 10px;

          .sub-link {
            color: rgba(255, 255, 255, 0.8);
            font-size: 14px;
            transition: color 0.2s;

            &:hover {
              color: #fff;
            }
          }
        }
      }

      .layer {
        width: 990px;
        background: rgba(255, 255, 255, 0.95);
        position: absolute;
        left: 250px;
        top: 0;
        display: none;
        padding: 20px;
        border-radius: 0 8px 8px 0;
        box-shadow: 5px 0 15px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);

        .layer-header {
          margin-bottom: 20px;
          display: flex;
          align-items: baseline;

          h4 {
            font-size: 20px;
            font-weight: 600;
            color: #333;
            margin: 0;
          }

          .recommendation-tag {
            margin-left: 15px;
            font-size: 14px;
            color: #666;
            padding: 4px 8px;
            background: #f5f5f5;
            border-radius: 4px;
          }
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;

          .product-card {
            background: #fff;
            border-radius: 6px;
            overflow: hidden;
            transition: all 0.3s ease;
            border: 1px solid #eee;

            &:hover {
              transform: translateY(-3px);
              box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
            }

            .product-link {
              display: block;
              padding: 10px;
            }

            .product-image {
              width: 120px;
              height: 120px;
              margin: 0 auto;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 4px;
              }
            }

            .product-info {
              padding: 10px 0 0;

              .product-name {
                font-size: 14px;
                color: #333;
                margin: 0 0 6px;
                line-height: 1.3;
                height: 36px;
              }

              .product-desc {
                font-size: 12px;
                color: #999;
                margin: 0 0 8px;
                height: 18px;
              }

              .product-price {
                display: flex;
                align-items: baseline;
                color: $priceColor;

                .currency {
                  font-size: 12px;
                  margin-right: 2px;
                }

                .amount {
                  font-size: 16px;
                  font-weight: 600;
                }
              }
            }
          }
        }
      }

      &:hover .layer {
        display: block;
        animation: fadeIn 0.3s ease;
      }
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

// 工具类
.ellipsis-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
