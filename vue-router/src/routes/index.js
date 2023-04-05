import { createRouter, createWebHistory } from 'vue-router'
// 1. Definir os componentes da rota.
import Home from '../views/Home.vue';
import CreateAccount from '../views/CreateAccount.vue';
import About from '../views/About.vue'
// 2. Definição de algumas rotas
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/createAccount', component: CreateAccount}
]

// 3. instância do roteador e passe a opção `routes`

const router = createRouter({
// 4. Forneça a implementação do histórico a ser usada.
  history: createWebHistory(),
  routes,
})

export default router;