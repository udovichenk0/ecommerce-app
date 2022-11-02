import ContentLoader from "react-content-loader"
export const Skeleton = () => {
	return (
		<div className="border-[1px] border-[#e1e1e1]">
			<ContentLoader 
    speed={2}
    width={240}
    height={314}
    viewBox="0 0 240 314"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
>
<rect x="9" y="6" rx="0" ry="0" width="218" height="117" /> 
    <rect x="25" y="154" rx="0" ry="0" width="183" height="24" /> 
    <rect x="34" y="194" rx="0" ry="0" width="163" height="28" /> 
    <rect x="63" y="256" rx="0" ry="0" width="106" height="28" />
</ContentLoader>
		</div>
	)
}