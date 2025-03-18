import imageView from '@/components/imageView/index.vue'
import sku from '@/components/VueSku/index.vue'
export const componentPlugin = {
  install(app) {
    app.component('ImageView', imageView);
    app.component('Sku', sku);

  }
}
