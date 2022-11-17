import { ProfileType } from "../types";

export const useAuth = (profile: ProfileType): boolean => {
  return profile.email ? true : false;
};
