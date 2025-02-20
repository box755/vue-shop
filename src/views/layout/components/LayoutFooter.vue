<template>
  <footer class="app_footer">
    <!-- 聯繫我們 -->
    <div class="contact">
      <div class="container">
        <dl>
          <dt>客戶服務</dt>
          <dd><i class="iconfont icon-kefu"></i> 聯繫客服</dd>
          <dd><i class="iconfont icon-icon-problem"></i> 問題反饋</dd>
        </dl>
        <dl>
          <dt>關注我們</dt>
<!--          使用icon font提供的css樣式-->
          <dd><i class="iconfont icon-line"></i> </dd>
          <dd><i class="iconfont icon-facebook-fill"></i> </dd>
        </dl>
        <dl>
          <dt>下載APP</dt>
          <dd class="qrcode">
            <span>掃描二維碼</span>
            <img src="@/assets/images/qrcode.jpg" />
          </dd>
          <dd class="download">
            <span>點擊下載APP</span>
            <a href="javascript:;">下載頁面</a>
          </dd>
        </dl>
        <dl>
          <dt>服務專線</dt>
          <dd class="hotline">(04)-2658-0858 <small>周一至周日 8:00-18:00</small></dd>
          <dd class="hotline">0920-687-811 <small>周一至周日 8:00-18:00</small></dd>
        </dl>
      </div>
    </div>
    <!-- 其它 -->
    <div class="extra">
      <div class="container">
        <div class="slogan">
          <a href="javascript:;">
            <i class="iconfont icon-footer01"></i>
            <span>價格親民</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer02"></i>
            <span>物流迅速</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer03"></i>
            <span>品質保證</span>
          </a>
        </div>
        <!-- 版權訊息 -->
        <div class="copyright">
          <p>
            <a href="javascript:;">關於我們</a>
            <a href="javascript:;">帮助中心</a>
            <a href="javascript:;">售後服務</a>
            <a href="javascript:;">配送詳情</a>
            <a href="javascript:;">商務合作</a>
            <a href="javascript:;">搜尋推薦</a>
            <a href="javascript:;">有情連結</a>
          </p>
          <p>CopyRight © 水妹兒假髮</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang='scss'>
@use "sass:color";

.app_footer {
  overflow: hidden;
  background-color: color.adjust(#fafafa, $lightness: -5%);
  padding-top: 20px;
  font-family: "Microsoft JhengHei", Arial, sans-serif;

  .contact {
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

    .container {
      padding: 50px 0 30px;
      display: flex;
      justify-content: center;
    }

    dl {
      text-align: center;
      padding: 0 60px;
      border-right: 1px solid color.adjust(#eee, $lightness: -10%);
      color: color.adjust(#666, $lightness: -5%);

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        border-right: none;
        padding-right: 0;
      }
    }

    dt {

      font-size: 20px;
      font-weight: bold;
      color: color.adjust(#333, $lightness: -10%);
    }

    dd {
      margin-top: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100px;
      height: 100px;
      padding: 10px;
      border-radius: 8px;
      border: 1px solid color.adjust(#ddd, $lightness: -10%);
      transition: all 0.3s ease;

      .iconfont {
        font-size: 36px;
        color: color.adjust(#777, $lightness: -5%);
        transition: color 0.3s ease;
      }

      &:hover {
        border-color: color.adjust($xtxColor, $lightness: -10%);
        background: rgba(39, 186, 155, 0.1);

        .iconfont {
          color: color.adjust($xtxColor, $lightness: -10%);
        }
      }
    }

    .qrcode {
      font-size: 12px;
      font-weight: bold;
      width: 100px;
      height: 100px;
      padding: 12px;
      border: 1px solid color.adjust(#ddd, $lightness: -10%);
      border-radius: 8px;
      background: #fff;
    }

    .download {
      padding-top: 12px;
      font-size: 12px;
      text-align: center;

      span {
        display: block;
        color: color.adjust(#555, $lightness: -5%);
      }

      a {
        display: block;
        padding: 8px 18px;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        border-radius: 4px;
        background-color: color.adjust($xtxColor, $lightness: -10%);
        transition: background 0.3s ease;

        &:hover {
          background-color: color.adjust($xtxColor, $lightness: -20%);
        }
      }
    }

    .hotline {

      padding-top: 10px;
      font-size: 18px;
      font-weight: bold;
      color: color.adjust(#444, $lightness: -5%);
      width: 200px; // 讓它變長，可以根據需求調整

      small {
        display: block;
        font-size: 14px;
        color: color.adjust(#888, $lightness: -10%);
      }
    }
  }

  .extra {
    background-color: color.adjust(#222, $lightness: -10%);
    padding: 40px 0;
  }

  .slogan {
    display: flex;
    justify-content: space-between;
    padding: 40px 80px;
    border-bottom: 1px solid color.adjust(#333, $lightness: -10%);

    a {
      display: flex;
      align-items: center;
      font-size: 28px;
      color: #fff;
      transition: color 0.3s ease;

      &:hover {
        color: color.adjust($sucColor, $lightness: -10%);
      }

      i {
        font-size: 40px;
        margin-right: 12px;
      }

      span {
        font-weight: bold;
      }
    }
  }

  .copyright {
    text-align: center;
    color: color.adjust(#aaa, $lightness: -10%);
    font-size: 14px;
    margin-top: 20px;

    p {
      margin-bottom: 10px;
    }

    a {
      color: color.adjust(#aaa, $lightness: -10%);
      padding: 0 12px;
      border-right: 1px solid color.adjust(#aaa, $lightness: -10%);
      transition: color 0.3s ease;

      &:last-child {
        border-right: none;
      }

      &:hover {
        color: #fff;
      }
    }
  }
}

</style>
<script setup lang="ts">
</script>
