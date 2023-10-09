import { BasketDto } from "../basket";

export type UserId = string
export type FirebaseUser = {
  address: string;
  photoURL: null | string;
  email: string;
  displayName: string;
  uid: UserId;
  mobile: string | null;
  creationTime: string;
}

export type UserDto = {
  address: string;
  avatar: null | string;
  email: string;
  joinedData: string;
  basket: BasketDto[]
  name: string;
  uid: string;
  mobile: string | null;
}