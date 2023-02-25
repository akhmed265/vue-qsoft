import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../pages/Home/index.vue'
import GoodsPage from '../pages/Goods/index.vue'
import ShippingAndPaymentPage from '../pages/ShippingAndPayment/index.vue'
import GuaranteePage from '../pages/Guarantee/index.vue'
import AboutPage from '../pages/About/index.vue'
import ContactsPage from '../pages/Contacts/index.vue'
import Compare from "../pages/Compare/index.vue";
import Favorite from "../pages/Favorite/index.vue";
import Cart from "../pages/Cart/index.vue";

const routes = [
	{ path: '/', component: HomePage },
	{ path: '/goods', component: GoodsPage },
	{ path: '/shipping-and-payment', component: ShippingAndPaymentPage },
	{ path: '/guarantee', component: GuaranteePage },
	{ path: '/about', component: AboutPage },
	{ path: '/contacts', component: ContactsPage },
	{ path: '/compare', component: Compare },
	{ path: '/favorite', component: Favorite },
	{ path: '/cart', component: Cart }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
