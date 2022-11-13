import { ProfileType } from "../types";

export const useAuth = (profile: ProfileType) => {
  if (profile.email) return profile;
  return false;
};
