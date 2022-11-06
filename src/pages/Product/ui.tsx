import { BackButton } from "@/shared/ui/buttons/backBtn"
import { Layout } from "@/shared/ui/layout"
import { useParams } from "react-router-dom"

const Product = () => {
	const {id} = useParams()
	return (
		<Layout>
			<div className="container px-14 pb-20" >
				<div className="mb-10">
					<BackButton/>
				</div>
					<div className="w-full flex justify-center">
						<div className="w-[1053px] h-[575px]">
							<div className="p-2">

							</div>
						</div>
					</div>
					
			</div>
		</Layout>
	)
}

export default Product