import { db, app } from "./config"
import { collection, doc, setDoc, getDoc, getDocs, query, orderBy, where, limit, startAfter, FieldPath, documentId, DocumentData, CollectionReference, Query, QuerySnapshot  } from "firebase/firestore";


const createCollection = <T = DocumentData>(collectionName: string) => {
	return collection(db, collectionName) as CollectionReference<T>
}
// Create a key generator
const generateKey = doc(createCollection('products')).id

const getProducts = async (lastRefKey: any) => {
	return new Promise((res, rej) => {
		(async () => {
			if(lastRefKey){
				try{
					const products:DocumentData[] = []
					const q = query(createCollection('products'), orderBy(documentId()), startAfter(lastRefKey), limit(4))
					const data = await getDocs(q)
					data.docs.forEach((doc:any) => {
						return products.push({
							id: doc.id, ...doc.data()});
					})
					const lastKey = data.docs[data.size - 1].id
					res({products, lastKey})
				}
				catch(err: any){
					rej(err.message || 'Faild to fetch products')
				}	
			}
			else{
				try{
					const products:DocumentData[] = []
					const q = query(createCollection('products'), limit(4))
					const data = await getDocs(q)
					data.docs.forEach((doc) => products.push({ id: doc.id, ...doc.data()}))
					const total = (data.size)
					const lastRef = data.docs[data.size - 1].id
					return res({products, lastRef, total})
				}
				catch(err: any){
					rej(err.message || 'Faild to fetch products')
				}
			}
		})()
	})
}

const getFeaturedProducts = async () => 
await getDocs(query(collection(db,'products'), where('isFeatured', '==', true), limit(11)))

const getRecommendedProducts = async () => 
await getDocs(query(collection(db, 'products'), where('isRecommended', '==', true), limit(11)))


const searchProducts = async (searchName:string) => {
	return new Promise((res,rej) => {
		(async () => {
			try {
				const searchItems: DocumentData[] = []
				const data = await getDocs(query(collection(db,'products'), where('name', '==', searchName), limit(11)))
				data.docs.forEach(doc => {
					searchItems.push(doc.data())
				})	
				res(searchItems)
			} catch (error:any) {
				rej(error.message || 'Something went wrong')
			}
		})()
	})
}

export {
	getProducts,
	generateKey,
	getFeaturedProducts,
	getRecommendedProducts,
	searchProducts
}