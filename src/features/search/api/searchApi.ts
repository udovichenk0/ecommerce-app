import {
  collection,
  DocumentData,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore"

import { db } from "@/shared/api"

const searchProducts = async (searchName: string) => {
  return new Promise((res, rej) => {
    (async () => {
      try {
        const searchItems: DocumentData[] = []
        if (searchName[0].toUpperCase() != searchName[0])
          searchName = searchName[0].toUpperCase() + searchName.slice(1)
        const data = await getDocs(
          query(
            collection(db, "products"),
            where("name", ">=", searchName),
            where("name", "<=", searchName + "\uf8ff"),
            limit(11),
          ),
        )
        data.docs.forEach((doc) => {
          searchItems.push(doc.data())
        })
        // throw new Error()
        res(searchItems)
      } catch (error: any) {
        rej(error.message)
      }
    })()
  })
}

export const api = {
  searchProducts,
}
