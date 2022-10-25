import React from "react";
import { Home } from "./Home";
const SignInLazyPage = React.lazy(() => import('./SignIn'))
const SignUpLazyPage = React.lazy(() => import('./SignUp'))
export const routes = [
	{
		path: '/',
		Component: Home
	},
	{
		path: '/signin',
		Component: SignInLazyPage
	},
	{
		path: '/signup',
		Component: SignUpLazyPage
	},
]