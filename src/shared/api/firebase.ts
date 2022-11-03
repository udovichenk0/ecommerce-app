import { db, app } from "./config"
import { collection, doc, setDoc, getDoc, getDocs, query, orderBy, where, limit, startAfter, FieldPath, documentId, DocumentData, CollectionReference, Query, QuerySnapshot  } from "firebase/firestore";
import { ProductType } from "./types";

const createCollection = <T = DocumentData>(collectionName: string) => {
	return collection(db, collectionName) as CollectionReference<T>
}
// Create a key generator
const generateKey = doc(createCollection('products')).id

const getProducts = async (lastRefKey: string | null) => {
	return new Promise((res, rej) => {
		(async () => {
			if(lastRefKey){
				try{
					const products:ProductType[] = []
					const q = query(createCollection('products'), orderBy(documentId()), startAfter(lastRefKey), limit(11))
					const data = await getDocs(q)
					data.docs.forEach((doc:any) => {
						return products.push({
							id: doc.id, ...doc.data()});
					})
					const lastKey = data.docs[2].id
					res({products, lastKey})
				}
				catch(err: any){
					rej(err.message || 'Faild to fetch products :(')
				}	
			}
			else{
				try{
					const products:ProductType[] = []
					const q = query(createCollection('products'), limit(11))
					const data = await getDocs(q)
					data.docs.forEach((doc) => products.push({ id: doc.id, ...doc.data()}))
					const total = (data.size)
					const lastKey = data.docs[2].id
					return res({products, lastKey, total})
				}
				catch(err: any){
					rej(err.message || 'Faild to fetch products :(')
				}
			}
		})()
	})
}

const getFeaturedProducts = async () => {
	const docs:any = []
	const q = query(collection(db,'products'), where('isFeatured', '==', true), limit(11))
	const data = await getDocs(q)
	return data
}



export {
	getProducts,
	generateKey,
	getFeaturedProducts
}