export const UIloadmore = ({onLoadMore}:any) => {
	return (
		<button 
		className="bg-black py-5 px-6 text-white font-bold text-lg"
		onClick={onLoadMore}>Show more items</button>
	)
}