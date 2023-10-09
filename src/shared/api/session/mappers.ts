import { UserCredential } from "firebase/auth";

import { FirebaseUser, UserDto } from "./types";

export function mapUser(response: UserCredential, fullName?: string): UserDto {
  const user = response.user
  const { email, uid, photoURL, phoneNumber, displayName } = user;
  return {
    email: email!,
    uid,
    avatar: photoURL,
    mobile: phoneNumber,
    joinedData: user.metadata.creationTime!,
    name: (displayName || fullName)!,
    address: '',
    basket: []
  };
}
export function normilizeUser(user: UserDto){
  return {
    address: user.address,
    avatar: user.avatar,
    email: user.email,
    joinedData: user.joinedData,
    name: user.name,
    uid: user.uid,
    mobile: user.mobile,
  }
}