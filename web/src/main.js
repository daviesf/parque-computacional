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
    { path: '/patrimonios', component: Patrimonio },
    { path: '/bancadas', component: Bancada },
    { path: '/consertos', component: Manutencao },
    { path: '/helpdesk', component: HelpDesk },
    { path: '/chamados', component: HelpDeskUser },
    { path: '/usuarios', component: Usuario },
    { path: '/logout', component: Logout },
    { path: '/404', component: NotFound },
    { path: '/:pathMatch(.*)', redirect: '/404' },
    { path: '/dashboard', component: Dashboard }
  ]
})

router.beforeEach((to, from, next) => {
  theme();
  const AKJA12Value = document.cookie.replace(/(?:(?:^|.*;\s*)AKJA12\s*=\s*([^;]*).*$)|^.*$/, "$1");
  
  if (AKJA12Value) {
    const query = `query ConfereSession($idSession: String!) {
      confereSession(idSession: $idSession) {
        nome
        idFuncionario
        tipo
      }
    }`
    const variables = { idSession: AKJA12Value }

    axios.post('http://localhost:4000', { query, variables }).then((result) => {
      console.log(result);
      if (result.data.data.confereSession) {
        if (result.data.data.confereSession.tipo == 0 && to.path != '/chamados' && to.path != '/logout') {
          // Redirecionar para /chamados se o tipo for 0 e o usuário não estiver em /chamados
          return next('/chamados');
        }
        if (result.data.data.confereSession.tipo == 1 && to.path == '/chamados') {
          return next('/404')
        }
        if (to.path === '/login') {
          // Redirecionar para a página inicial se o usuário tentar acessar a página de login
          return next('/');
        }
        // Continuar a navegação
        return next();
      } else {
        // Redirecionar para a página de login se a sessão não for válida
        return next('/login');
      }
    }).catch(() => {
      // Redirecionar para a página de login em caso de erro
      return next('/login');
    });
  } else {
    if (to.path === '/login') {
      // Permitir acesso à página de login
      return next();
    } else {
      // Redirecionar para a página de login se o usuário não estiver autenticado
      return next('/login');
    }
  }
});

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
