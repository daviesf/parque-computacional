import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Patrimonio from './views/Patrimonio.vue'
import Bancada from './views/Bancada.vue'
import Manutencao from './views/Manutencao.vue'
import HelpDesk from '.views/HelpDesk'
import Usuario from './views/Usuario.vue'
import Setting from './views/Setting.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/patrimonio',
      name: 'Patrimonio',
      component: Patrimonio
    },
    {
      path: '/bancada',
      name: 'Bancada',
      component: Bancada
    },
    {
      path: '/manutencao',
      name: 'Manutencao',
      component: Manutencao
    },
    {
      path: '/helpDesk',
      name: 'HelpDesk',
      component: HelpDesk
    },
    {
      path: '/usuario',
      name: 'Usuario',
      component: Usuario
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    }
  ]
})

export default router
