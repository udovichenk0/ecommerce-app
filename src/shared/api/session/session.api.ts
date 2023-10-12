import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"

import { auth, db } from "@/shared/api"

import { mapUser } from "./mappers"
import { UserDto } from "./types"

export const getUser = async (uid: string) => {
  const response = await getDoc(doc(db, "users", uid))
  return response.data() as UserDto
}

export const updateProfile = async (payload: any) => {
  return updateDoc(doc(db, "users", payload.id), { ...payload.info }).then(() =>
    getUser(payload.id),
  )
}

const githubProvider = new GithubAuthProvider()
const googleProvider = new GoogleAuthProvider()

export const signInWithGithub = async () => {
  const result = await signInWithPopup(auth, githubProvider)
  const user = mapUser(result)
  const test = await getUser(user.uid)
  if (!test) {
    return await addUser(user)
  }
  return test
}
export const signInWithEmail = async (email: string, password: string) => {
  const result = await signInWithEmailAndPassword(auth, email, password)
  const user = await getDoc(doc(db, "users", result.user.uid))
  return user.data() as UserDto
}

export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider)
  const user = mapUser(result)
  const test = await getUser(user.uid)
  if (!test) {
    return await addUser(user)
  }
  return test
}

export const signUserOut = () => signOut(auth)

export const createAccount = async (
  email: string,
  password: string,
  fullName: string,
) => {
  const result = await createUserWithEmailAndPassword(auth, email, password)
  const user = mapUser(result, fullName)
  return await addUser(user)
}

export const addUser = async (user: UserDto) => {
  await setDoc(doc(db, "users", user.uid), user)
  return user
}
