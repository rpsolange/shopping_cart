import Vue from 'vue'
import Router from 'vue-router'

// COMPONENTES 
import Login from '../components/login.vue'


Vue.use(Router)
const router = new Router({
	routes: [
		{
			path: '/',
			name: 'login',
			component: Login
		}
	]
})

export default router