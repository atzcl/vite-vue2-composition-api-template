import type { VueConstructor } from 'vue'
import VueCompositionAPI from '@vue/composition-api'

export const vue3Compatible = (Vue: VueConstructor) => {
  Vue.use(VueCompositionAPI)
}
