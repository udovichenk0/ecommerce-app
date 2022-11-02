import { initializeApp } from "@firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MSG_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID
  };
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export default firebaseConfig;

