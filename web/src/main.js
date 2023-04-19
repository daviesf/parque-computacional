import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import App from './App.vue'
import Home from './views/Home.vue'
import Patrimonio from './views/Patrimonio.vue'
// import Bancada from './views/Bancada.vue'
// import HelpDesk from './views/HelpDesk.vue'
// import Usuario from './views/Usuario.vue'
// import Setting from './views/Setting.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/patrimonio', component: Patrimonio },
    // { path: '/bancada', component: Bancada },
    // { path: '/helpDesk', component: HelpDesk },
    // { path: '/usuario', component: Usuario },
    // { path: '/setting', component: Setting },
  ]
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
