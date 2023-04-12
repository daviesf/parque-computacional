import VueRouter from 'vue-router';
import home from '../views/home.vue';
import patrimonio from '../views/patrimonio.vue';
import bancada from '../views/bancada.vue';
import helpDesk from '../views/helpDesk.vue';
import usuario from '../views/usuario.vue';
import setting from '../views/setting.vue';

const routes = [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/patrimonio',
      name: 'patrimonio',
      component: patrimonio
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
