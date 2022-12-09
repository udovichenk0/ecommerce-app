import {
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

import { auth, db } from "@/shared/api";

const getUser = async (uid: string) =>
  (await getDoc(doc(db, "users", uid))).data();

const updateProfile = (payload: any) => {
  return updateDoc(doc(db, "users", payload.id), { ...payload.info }).then(() =>
    getUser(payload.id)
  );
};
const signIn = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password).then((resp) =>
    getDoc(doc(db, "users", resp.user.uid))
  );
};

const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

const signInWithGithub = async () => {
  return signInWithPopup(auth, githubProvider).then((result) => {
    const user = result.user;
    const { email, uid, photoURL, phoneNumber, displayName } = user;
    return {
      email,
      uid,
      mobile: user.phoneNumber,
      photoURL,
      creationTime: user.metadata.creationTime,
      phoneNumber,
      displayName,
      isNewUser: getAdditionalUserInfo(result)?.isNewUser,
    };
  });
};
const signInWithGoogle = async () => {
  return signInWithPopup(auth, googleProvider).then((result) => {
    const user = result.user;
    const { email, uid, photoURL, phoneNumber, displayName } = user;
    return {
      email,
      uid,
      photoURL,
      mobile: user.phoneNumber,
      creationTime: user.metadata.creationTime,
      phoneNumber,
      displayName,
      isNewUser: getAdditionalUserInfo(result)?.isNewUser,
    };
  });
};

const signUserOut = () => signOut(auth);

const createAccount = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

const addUser = (data: any, id: string) => {
  setDoc(doc(db, "users", id), data);
};

export const api = {
  getUser,
  updateProfile,
  createAccount,
  signIn,
  signInWithGithub,
  signInWithGoogle,
  signUserOut,
  addUser,
};
