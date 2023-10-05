import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { PrivatePageGuard, SignedInPageGuard } from "@/entities/session/protected-route";

const ShipDetailPage = lazy(() => import("@/pages/Check-out/ship-detail"));
const SummaryOrderPage = lazy(() => import("@/pages/Check-out/summary-order"));
const Payment = lazy(() => import("@/pages/Check-out/payment"));
const MainPage = lazy(() => import("@/pages/Home"));
const SignInPage = lazy(() => import("@/pages/Auth/SignIn"));
const SignUpPage = lazy(() => import("@/pages/Auth/SignUp"));
const ShopPage = lazy(() => import("@/pages/Shop"));
const SearchPage = lazy(() => import("@/pages/Search"));
const ProductPage = lazy(() => import("@/pages/Product"));
const FeaturedPage = lazy(() => import("@/pages/Featured"));
const RecommendedPage = lazy(() => import("@/pages/Recommended"));
const AccountPage = lazy(() => import("@/pages/Account"));
const AccountEditPage = lazy(() => import("@/pages/AccountEdit"));
export enum RoutesEnum {
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
  STEP1 = "step1",
  STEP2 = "step2",
  STEP3 = "step3",
}
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>,
  },
  {
    path: '/featured',
    element: <FeaturedPage/>,
  },
  {
    path: '/recommended',
    element: <RecommendedPage/>
  },
  {
    path: '/shop',
    element: <ShopPage/>,
  },
  {
    path: '/search',
    element: <SearchPage/>
  },
  {
    path: '/product/:id',
    element: <ProductPage/>
  },
  {
    path: '/account',
    element: <PrivatePageGuard><AccountPage/></PrivatePageGuard>,
  },
  {
    path: '/account/edit',
    element: <PrivatePageGuard><AccountEditPage/></PrivatePageGuard>
  },
  {
    path: '/auth',
    children: [
      {
        path: 'signin',
        element: <SignedInPageGuard><SignInPage/></SignedInPageGuard>
      },
      {
        path: 'signup',
        element: <SignedInPageGuard><SignUpPage/></SignedInPageGuard>
      }
    ]
  },
])