import VueRouter from 'vue-router';
import homeView from '../views/home.vue';
import patrimonioView from '../views/patrimonio.vue';
import bancada from '../views/bancada.vue';
import helpDesk from '../views/helpDesk.vue';
import usuario from '../views/usuario.vue';
import setting from '../views/setting.vue';

const routes = [
    {
      path: '/home',
      name: 'home',
      component: homeView
    },
    {
      path: '/patrimonio',
      name: 'patrimonio',
      component: patrimonioView
    },
    {
      path: '/bancada',
      name: 'bancada',
      component: bancada
    },
    {
      path: '/helpDesk',
      name: 'helpDesk',
      component: helpDesk
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: usuario
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    }
  ]

const router = new VueRouter({
  routes
});

export default router;