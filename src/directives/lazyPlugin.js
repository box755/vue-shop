// 綁定通用函數插建

// 導入vueuse的套件，用以觀察target是否進入可示範圍
import {useIntersectionObserver} from "@vueuse/core";

export const lazyPlugin = {
  // 宣告一個install方法
  // 在main中使用app.use(lazyPlugin)時，會自動把app傳進install方法
  install(app) {
    app.directive('lazy-img', {
      // mounted 鉤子函數，在掛載成功後開始執行
      /**
       *
       * @param el 綁定這個屬性的元素
       * @param binding 屬性的值
       */
      mounted(el, binding) {
        // 解構賦值，獲得stop方法。useIntersectionObserver方法回傳物件
        const {stop} = useIntersectionObserver(
          el,([{ isIntersecting }]) => {
            if(isIntersecting) {
              el.src = binding.value
              // 若已經讀取完圖片，不再監控
              stop()
            }
          },

        )
      }
    })

  }
}

