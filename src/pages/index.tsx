import { routes } from "@/shared/config/route";
import { RenderRoutes } from "@/shared/lib/render-routes";
export const Routing = () => {
  return (
    <div>
      <RenderRoutes routes={routes}/>
    </div>
  )
}