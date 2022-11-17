import { ProfileType } from "../types";

export const useAuth = (profile: ProfileType): boolean => {
  return profile.name ? true : false;
};
