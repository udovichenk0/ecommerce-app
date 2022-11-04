export const UIloadmore = ({onLoadMore, isFetching}:any) => {
	return (
		<button
		disabled={isFetching}
		className="bg-black py-5 px-6 text-white font-bold text-lg"
		onClick={onLoadMore}>{isFetching? 'Fetching items...' : 'Show more items'}</button>
	)
}