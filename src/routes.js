import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home.vue'
import Register from './components/Register.vue'
import List from './components/List.vue'
import Edit from './components/Edit.vue'

const router = new VueRouter({
	mode:'history',
	routes:[
		{ path:"",component:Home},
		{ path:"/register",component:Register},
		{ path:"/list",component:List},
		{ path:"/edit/:id",component:Edit},
	]
});

export default router
