import React from "react";
import { Home } from "./Home";
const SignInLazyPage = React.lazy(() => import('./SignIn'))
const SignUpLazyPage = React.lazy(() => import('./SignUp'))
const ShopLazyPage = React.lazy(() => import('./Shop'))
const SearchLazyPage = React.lazy(() => import('./Search'))
const ProductLazyPage = React.lazy(() => import('./Product'))
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
	{
		path: '/shop',
		Component: ShopLazyPage
	},
	{
		path: '/search',
		Component: SearchLazyPage
	},
	{
		path: '/product',
		Component: ProductLazyPage
	},
]