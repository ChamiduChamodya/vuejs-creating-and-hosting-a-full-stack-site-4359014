import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import * as VueRouter from 'vue-router'
import ProductsPage from './pages/ProductsPage.vue'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductDetailsPage from './pages/ProductDetailPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

createApp(App)
  .use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [
      {
        path: '/products',
        component: ProductsPage
      },
      {
        path: '/cart',
        component: ShoppingCartPage
      },
      {
        path: '/products/:productId',
        component: ProductDetailsPage
      },
      {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage
      }]
  }))
  .mount('#app')
