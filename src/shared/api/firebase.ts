import {
  signInWithPopup,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAdditionalUserInfo,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  orderBy,
  where,
  limit,
  startAfter,
  documentId,
  DocumentData,
  CollectionReference,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { auth, db } from "./config";
import { BasketPropType } from "./types";
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

//AUTH

const getUser = async (uid: string) =>
  (await getDoc(doc(db, "users", uid))).data();

const createAccount = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

const signIn = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password).then((resp) =>
    getDoc(doc(db, "users", resp.user.uid))
  );
};

const addUser = (data: any, id: string) => {
  setDoc(doc(db, "users", id), data);
};

const signUserOut = () => signOut(auth);

const setBasket = async (basket: BasketPropType[], id: string) => {
  updateDoc(doc(db, "users", id), { basket });
};

//Profile

const updateProfile = (payload: any) => {
  const { name, address } = payload.data;
  return updateDoc(doc(db, "users", payload.id), {
    name: name,
    address: address,
  }).then(() => getUser(payload.id));
};

const signInWithGithub = async () => {
  return signInWithPopup(auth, githubProvider).then((result) => {
    const user = result.user;
    const { email, uid, photoURL, phoneNumber, displayName } = user;
    return {
      email,
      uid,
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
      creationTime: user.metadata.creationTime,
      phoneNumber,
      displayName,
      isNewUser: getAdditionalUserInfo(result)?.isNewUser,
    };
  });
};

//PRODUCTS
// Create a key generator
const generateKey = doc(createCollection("products")).id;
const getProducts = async (lastRefKey: any) => {
  return new Promise((res, rej) => {
    (async () => {
      if (lastRefKey) {
        try {
          const products: DocumentData[] = [];
          const q = query(
            createCollection("products"),
            orderBy(documentId()),
            startAfter(lastRefKey),
            limit(4)
          );
          const data = await getDocs(q);
          data.docs.forEach((doc: DocumentData) => {
            return products.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          const lastKey = data.docs[data.size - 1].id;
          res({ products, lastKey });
        } catch (err: any) {
          rej(err.message || "Faild to fetch products");
        }
      } else {
        try {
          const products: DocumentData[] = [];
          const q = query(createCollection("products"), limit(4));
          const data = await getDocs(q);
          data.docs.forEach((doc) =>
            products.push({ id: doc.id, ...doc.data() })
          );
          const total = data.size;
          const lastRef = data.docs[data.size - 1].id;
          return res({ products, lastRef, total });
        } catch (err: any) {
          rej(err.message || "Faild to fetch products");
        }
      }
    })();
  });
};

const getFeaturedProducts = async () =>
  await getDocs(
    query(
      collection(db, "products"),
      where("isFeatured", "==", true),
      limit(11)
    )
  );

const getRecommendedProducts = async () =>
  await getDocs(
    query(
      collection(db, "products"),
      where("isRecommended", "==", true),
      limit(11)
    )
  );

const searchProducts = async (searchName: string) => {
  return new Promise((res, rej) => {
    (async () => {
      try {
        const searchItems: DocumentData[] = [];
        if (searchName[0].toUpperCase() != searchName[0])
          searchName = searchName[0].toUpperCase() + searchName.slice(1);
        const data = await getDocs(
          query(
            collection(db, "products"),
            where("name", ">=", searchName),
            where("name", "<=", searchName + "\uf8ff"),
            limit(11)
          )
        );
        data.docs.forEach((doc) => {
          searchItems.push(doc.data());
        });
        // throw new Error()
        res(searchItems);
      } catch (error: any) {
        rej(error.message);
      }
    })();
  });
};

const GetSingleProduct = async (id: string) => getDoc(doc(db, "products", id));
export {
  getProducts,
  generateKey,
  getFeaturedProducts,
  getRecommendedProducts,
  searchProducts,
  GetSingleProduct,
  createAccount,
  addUser,
  signIn,
  getUser,
  signUserOut,
  setBasket,
  signInWithGithub,
  signInWithGoogle,
  updateProfile,
};
