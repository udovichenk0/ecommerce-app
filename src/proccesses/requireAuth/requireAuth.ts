import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

import { viewerModel } from "@/entities/viewer";
import { useAppSelector } from "@/shared/lib/redux-std";

export const RequireAuth = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const profile = useAppSelector(viewerModel.selectors.profile);

  if (profile.email) return children;
  else return navigate("/", { replace: true });
};
