import { lazy, ReactNode } from "react";

import { RequireAuth } from "@/processes/require-auth";
const MainPage = lazy(() => import("@/pages/Home"));
const SignInPage = lazy(() => import("@/pages/SignIn"));
const SignUpPage = lazy(() => import("@/pages/SignUp"));
const ShopPage = lazy(() => import("@/pages/Shop"));
const SearchPage = lazy(() => import("@/pages/Search"));
const ProductPage = lazy(() => import("@/pages/Product"));
const FeaturedPage = lazy(() => import("@/pages/Featured"));
const RecommendedPage = lazy(() => import("@/pages/Recommended"));
const AccountPage = lazy(() => import("@/pages/Account"));
const AccountEditPage = lazy(() => import("@/pages/AccountEdit"));

export enum AppRoutes {
  MAIN = "main",
  SIGNIN = "signin",
  SIGNUP = "signup",
  ACCOUNT = "account",
  EDIT = "edit",
  RECOMMENDED = "recommended",
  FEATURED = "featured",
  SHOP = "shop",
  SEARCH = "search",
  PRODUCT = "product",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.FEATURED]: "/featured",
  [AppRoutes.RECOMMENDED]: "/recommended",
  [AppRoutes.SHOP]: "/shop",
  [AppRoutes.SEARCH]: "/search",
  [AppRoutes.PRODUCT]: "/product/:id",
  [AppRoutes.ACCOUNT]: "/account",
  [AppRoutes.EDIT]: "/account/:edit",
  [AppRoutes.SIGNIN]: "/signin",
  [AppRoutes.SIGNUP]: "/signup",
};

export const routes: Record<AppRoutes, { path: string; element: ReactNode }> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage/>,
  },
  [AppRoutes.FEATURED]: {
    path: RoutePath.featured,
    element: <FeaturedPage/>,
  },
  [AppRoutes.RECOMMENDED]: {
    path: RoutePath.recommended,
    element: <RecommendedPage/>,
  },
  [AppRoutes.SHOP]: {
    path: RoutePath.shop,
    element: <ShopPage/>,
  },
  [AppRoutes.SEARCH]: {
    path: RoutePath.search,
    element: <SearchPage/>,
  },
  [AppRoutes.PRODUCT]: {
    path: RoutePath.product,
    element: <ProductPage/>,
  },
  [AppRoutes.ACCOUNT]: {
    path: RoutePath.account,
    element: <RequireAuth><AccountPage/></RequireAuth> ,
  },
  [AppRoutes.EDIT]: {
    path: RoutePath.edit,
    element: <AccountEditPage/>,
  },
  [AppRoutes.SIGNIN]: {
    path: RoutePath.signin,
    element: <SignInPage/>,
  },
  [AppRoutes.SIGNUP]: {
    path: RoutePath.signup,
    element: <SignUpPage/>,
  },
};
