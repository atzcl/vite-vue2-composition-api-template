import { createApp, h } from 'vue-demi'

import { router } from '@/router'

import App from './App.vue'

const app = createApp({
  router,
  render: () => h(App),
})

app.mount('#app')
