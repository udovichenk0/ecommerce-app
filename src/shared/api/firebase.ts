import { db, app } from "./config"
import { collection, doc, setDoc, getDocs, query, orderBy, where, limit } from "firebase/firestore";
import 'firebase/firestore';


const getProducts = async () => {
	const products = []
	const q = query(collection(db, 'products'), limit(11))
	const queryData = await getDocs(q)
	queryData.docs.forEach(doc => {
		products.push({uid: doc.id, ...doc.data()})
	})
	console.log(queryData.docs[queryData.docs.length - 1])
}




export {
	getProducts
}