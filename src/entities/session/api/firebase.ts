import { doc, getDoc } from "firebase/firestore";

import { db } from "@/shared/api";

const getUser = async (uid: string) =>
  (await getDoc(doc(db, "users", uid))).data();

export const api = {
  getUser,
};
