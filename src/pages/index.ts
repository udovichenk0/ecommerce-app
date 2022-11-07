import { lazy } from "react";

import { Home } from "./Home";
const SignInLazyPage = lazy(() => import("./SignIn"));
const SignUpLazyPage = lazy(() => import("./SignUp"));
const ShopLazyPage = lazy(() => import("./Shop"));
const SearchLazyPage = lazy(() => import("./Search"));
const ProductLazyPage = lazy(() => import("./Product"));
export const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/signin",
    Component: SignInLazyPage,
  },
  {
    path: "/signup",
    Component: SignUpLazyPage,
  },
  {
    path: "/shop",
    Component: ShopLazyPage,
  },
  {
    path: "/search",
    Component: SearchLazyPage,
  },
  {
    path: "/product/:id",
    Component: ProductLazyPage,
  },
];
