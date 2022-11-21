import { Oval } from 'react-loader-spinner'
export const Loader = () => {
	return (
		<div className='w-full h-screen flex items-center justify-center'>
			<Oval
			height={80}
			width={80}
			color="#f2f2f2"
			wrapperStyle={{}}
			wrapperClass=""
			visible={true}
			ariaLabel='oval-loading'
			secondaryColor="#101010"
			strokeWidth={2}
			strokeWidthSecondary={2}

			/>
		</div>
	)
}