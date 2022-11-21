import { lazy } from "react";

import { Home } from "./Home";
const SignInLazyPage = lazy(() => import("./SignIn"));
const SignUpLazyPage = lazy(() => import("./SignUp"));
const ShopLazyPage = lazy(() => import("./Shop"));
const SearchLazyPage = lazy(() => import("./Search"));
const ProductLazyPage = lazy(() => import("./Product"));
const FeaturedLazyPage = lazy(() => import("./Featured"));
const RecommendedLazyPage = lazy(() => import("./Recommended"));
const AccountLazyPage = lazy(() => import("./Account"));
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
    path: "/account",
    Component: AccountLazyPage,
  },
  {
    path: "/recommended",
    Component: RecommendedLazyPage,
  },
  {
    path: "/featured",
    Component: FeaturedLazyPage,
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
