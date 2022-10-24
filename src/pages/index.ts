import React from "react";
import { Home } from "./Home";
const SignInLazyPage = React.lazy(() => import('./SignIn'))
export const routes = [
	{
		path: '/',
		Component: Home
	},
	{
		path: '/signin',
		Component: SignInLazyPage
	},
]