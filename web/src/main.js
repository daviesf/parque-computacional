import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import App from './App.vue'
import Login from './views/login.vue'
import Home from './views/home.vue'
import Patrimonio from './views/patrimonio.vue'
import Bancada from './views/bancada.vue'
import Manutencao from './views/manutencao.vue'
import HelpDeskAdm from './views/helpDeskAdm.vue'
import Usuario from './views/usuario.vue'
import Logout from './views/logout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login },
    { path: '/', component: Home },
    { path: '/patrimonio', component: Patrimonio },
    { path: '/bancada', component: Bancada },
    { path: '/manutencao', component: Manutencao },
    { path: '/helpDeskAdm', component: HelpDeskAdm },
    { path: '/usuario', component: Usuario },
    { path: '/logout', component: Logout }
  ]
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
