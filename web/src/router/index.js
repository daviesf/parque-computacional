import { createRouter, createWebHistory } from 'vue-router'

import Login from './views/login.vue'
import Home from './views/home.vue'
import Patrimonio from './views/patrimonio.vue'
import Bancada from './views/bancada.vue'
import Manutencao from './views/manutencao.vue'
import HelpDesk from '.views/helpDeskAdm'
import HelpDeskUser from '.views/helpDeskUser'
import Usuario from './views/usuario.vue'
import Logout from './views/logout.vue'
import NotFound from './views/notFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/patrimonios',
      name: 'Patrimonio',
      component: Patrimonio
    },
    {
      path: '/bancadas',
      name: 'Bancada',
      component: Bancada
    },
    {
      path: '/consertos',
      name: 'Manutencao',
      component: Manutencao
    },
    {
      path: '/helpdesk',
      name: 'HelpDesk',
      component: HelpDesk
    },
    {
      path: '/chamados',
      name: 'HelpDeskUser',
      component: HelpDeskUser
    },
    {
      path: '/usuarios',
      name: 'Usuario',
      component: Usuario
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      redirect: '/404'
    }
  ]
})

export default router
