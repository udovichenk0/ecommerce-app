import { lazy, ReactNode } from "react";

// eslint-disable-next-line boundaries/element-types
import { ProductRequire, WithAuth, WithNoAuth } from "../hocs";
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
  STEP1 = "step1",
  STEP2 = "step2",
  STEP3 = "step3",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.FEATURED]: "/featured",
  [AppRoutes.RECOMMENDED]: "/recommended",
  [AppRoutes.SHOP]: "/shop",
  [AppRoutes.SEARCH]: "/search",
  [AppRoutes.PRODUCT]: "/product/:id",
  [AppRoutes.ACCOUNT]: "/account",
  [AppRoutes.EDIT]: "/account/edit",
  [AppRoutes.SIGNIN]: "/signin",
  [AppRoutes.SIGNUP]: "/signup",
  [AppRoutes.STEP1]: "/checkout/step1",
  [AppRoutes.STEP2]: '/checkout/step2',
  [AppRoutes.STEP3]: '/checkout/step3',
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
    element: <WithAuth><AccountPage/></WithAuth> ,
  },
  [AppRoutes.EDIT]: {
    path: RoutePath.edit,
    element: <WithAuth><AccountEditPage/></WithAuth>, 
  },
  [AppRoutes.SIGNIN]: {
    path: RoutePath.signin,
    element: <WithNoAuth><SignInPage/></WithNoAuth>,
  },
  [AppRoutes.SIGNUP]: {
    path: RoutePath.signup,
    element: <WithNoAuth><SignUpPage/></WithNoAuth>,
  },
  [AppRoutes.STEP1]: {
    path: RoutePath.step1,
    element: 
            <ProductRequire>
              <WithAuth>
                <SummaryOrderPage/>
              </WithAuth>
            </ProductRequire>
  },
  [AppRoutes.STEP2]:{
    path: RoutePath.step2,
    element: <ProductRequire>
              <WithAuth>
                <ShipDetailPage/>
              </WithAuth>
            </ProductRequire>
  },
  [AppRoutes.STEP3]:{
    path: RoutePath.step3,
    element:<ProductRequire>
          <WithAuth>
            <Payment/>
          </WithAuth>
        </ProductRequire>
  }
};
