import { UIloadmore } from "@/shared/ui/buttons/loadmore"
interface IProps {
	method: (lastRefKey: string | null) => void
	lastRefKey: string | null
}
export const LoadMore = ({method, lastRefKey}: IProps) => {
	const onLoadMore = () => {
		if(lastRefKey) method(lastRefKey)
	}
	return (
		<UIloadmore onLoadMore={onLoadMore}/>
	)
}