import Login from '@/views/Login';
import Home from '@/views/Home';
import Terms from '@/views/Terms';
import Admin from '@/views/Admin';
import User from '@/views/User';

export default [
	{
		path: "*",
		redirect: '/'
	},
	{
		path: "/login",
		meta: {
			public: true,
			requiresNotSigned: true
		},
		name: "Login",
		component: Login
	},
	{
		path: "/",
		meta: {
			public: true,
		},
		name: "Home",
		component: Home
	},
	{
		path: "/terms",
		meta: {
			public: true
		},
		name: "Terms",
		component: Terms
	},
	{
		path: "/admin",
		meta: {
			requiresAuth: true,
			requiresAdmin: true,
		},
		name: "Admin",
		component: Admin
	},
	{
		path: "/user",
		meta: {
			requiresAuth: true,
			requiresAdmin: false,
		},
		name: "User",
		component: User
	},
]