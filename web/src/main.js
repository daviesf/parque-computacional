import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { theme } from './script/theme.js'
import axios from 'axios'

import App from './App.vue'
import Login from './views/login.vue'
import Home from './views/home.vue'
import Patrimonio from './views/patrimonio.vue'
import Bancada from './views/bancada.vue'
import Manutencao from './views/manutencao.vue'
import HelpDesk from './views/helpDeskAdm.vue'
import HelpDeskUser from './views/helpDeskUser.vue'
import Usuario from './views/usuario.vue'
import Logout from './views/logout.vue'
import NotFound from './views/notFound.vue'
import Dashboard from './views/dashboard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login },
    { path: '/', component: Home },
    { path: '/patrimonio', component: Patrimonio },
    { path: '/bancada', component: Bancada },
    { path: '/manutencao', component: Manutencao },
    { path: '/helpDesk', component: HelpDesk },
    { path: '/helpDeskUser', component: HelpDeskUser },
    { path: '/usuario', component: Usuario },
    { path: '/logout', component: Logout },
    { path: '/404', component: NotFound },
    { path: '/:pathMatch(.*)', redirect: '/404' },
    { path: '/dashboard', component: Dashboard }
  ]
})

/*router.beforeEach((to, from, next) => {
  theme();
  const AKJA12Value = document.cookie.replace(/(?:(?:^|.*;\s*)AKJA12\s*=\s*([^;]*).*$)|^.*$/, "$1");
  if (AKJA12Value) {
    const query = `query ConfereSession($idSession: String!) {
      confereSession(idSession: $idSession) {
        nome
        idFuncionario
      }
    }`
    const variables = { idSession: AKJA12Value }

    axios.post('http://localhost:4000', { query, variables }).then((result) => {
      if (result.data.data.confereSession) {
        if (to.path === '/login') {
          next('/')
        }
        next()
      } else {
        next('/login')
      }
    }).catch(() => {
      next('/login')
    }
    )
  }
  else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})*/

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
