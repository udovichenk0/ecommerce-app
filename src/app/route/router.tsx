import { lazy } from "react"
import { Outlet, createBrowserRouter } from "react-router-dom"

import { featurePage } from "@/pages/Featured"
import { homePage } from "@/pages/Home"
import { productPage } from "@/pages/Product"
import { recommendedPage } from "@/pages/Recommended"
import { shopPage } from "@/pages/Shop"

import {
  PrivatePageGuard,
  SignedInPageGuard,
} from "@/entities/session/protected-route"

import { store } from "../store"

// const ShipDetailPage = lazy(() => import("@/pages/Check-out/ship-detail"));
// const SummaryOrderPage = lazy(() => import("@/pages/Check-out/summary-order"));
// const Payment = lazy(() => import("@/pages/Check-out/payment"));
const MainPage = lazy(() => import("@/pages/Home"))
const SignInPage = lazy(() => import("@/pages/Auth/SignIn"))
const SignUpPage = lazy(() => import("@/pages/Auth/SignUp"))
const ShopPage = lazy(() => import("@/pages/Shop"))
const SearchPage = lazy(() => import("@/pages/Search"))
const ProductPage = lazy(() => import("@/pages/Product"))
const FeaturedPage = lazy(() => import("@/pages/Featured"))
const RecommendedPage = lazy(() => import("@/pages/Recommended"))
const AccountPage = lazy(() => import("@/pages/Account"))
const AccountEditPage = lazy(() => import("@/pages/AccountEdit"))
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
    path: "/",
    element: <MainPage />,
    loader: () => {
      store.dispatch(homePage.getRecommendedProductsFx())
      store.dispatch(homePage.getFeaturedProductsFx())
    },
  },
  {
    path: "/featured",
    element: <FeaturedPage />,
    loader: () => store.dispatch(featurePage.getFeatureProductsFx()),
  },
  {
    path: "/recommended",
    element: <RecommendedPage />,
    loader: () => store.dispatch(recommendedPage.getRecommendedProductsFx()),
  },
  {
    path: "/shop",
    element: <ShopPage />,
    loader: () => store.dispatch(shopPage.getProductsFx()),
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
    loader: ({ params }) => {
      const id = params.id!
      store.dispatch(productPage.getRecommendedProductsFx())
      store.dispatch(productPage.getSingleProductFx(id))
    },
  },
  {
    path: "/account",
    element: (
      <PrivatePageGuard>
        <Outlet/>
      </PrivatePageGuard>
    ),
    children: [
      {path: '', element: <AccountPage />},
      {path: 'edit', element: <AccountEditPage/>}
    ]
  },
  {
    path: "/auth",
    element: (
      <SignedInPageGuard>
        <Outlet/>
      </SignedInPageGuard>
    ),
    children: [
      {
        path: "signin",
        element: <SignInPage/>
      },
      {
        path: "signup",
        element: (<SignUpPage/>),
      },
    ],
  },
])
