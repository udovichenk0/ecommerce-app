export const routes = {
  home: "/",
  shop: "/shop",
  featured: "/featured",
  recommended: "/recommended",
  search: "/search",
  product: (id: string) => `/product/${id}`,
  account: "/account",
  edit: "/account/edit",
  signin: "/auth/signin",
  signup: "/auth/signup",
} as const
