import { firebase } from "@/shared/api"
import { DocumentData } from "firebase/firestore"
import { useEffect, useState } from "react"


export const useGetFeatureProducts = () => {
	const [isFeatureLoading, setLoading] = useState<boolean>(false)
	const [featured, setFeatured] = useState<any>([])
	const [error, setError] = useState<any>([])
	const getFeatured = async () => {
		setLoading(true)
		const data = await firebase.getFeaturedProducts()
		const items: DocumentData[] = []
		try {
			if(data.empty) setLoading(false)
			else{
				data.docs.forEach(doc => items.push(doc.data()))
				setFeatured(items)
			}
		} catch (error) {
			setError('Failed to fetch featured products')
			throw new Error('Something went wrong :(')
		}
		finally{
			setLoading(false)
		}
	}
	return {featured, getFeatured, isFeatureLoading, error}
}