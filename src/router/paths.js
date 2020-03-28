import Login from '@/views/Login';
import Home from '@/views/Home';

export default [
	{
		path: "*",
		redirect: '/'
	},
	{
		path: "/login",
		meta: {
			public: true
		},
		name: "Login",
		component: Login
	},
	{
		path: "/",
		meta: {
			requiresAuth: true
		},
		name: "Home",
		component: Home
	},
]