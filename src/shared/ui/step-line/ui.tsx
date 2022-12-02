const steps = [
	{checkStep: 1, text: 'Order Summary'},
	{checkStep: 2, text: 'Shipping Details'},
	{checkStep: 3, text: 'Payment'},
]

export const StepLine = ({step}:{step: number}) => {
	return (
		<div className="w-full flex justify-between mb-10 relative after:content after:top-[15px] after:absolute after:w-[95%] after:h-[2px] after:bg-[#e1e1e1] after:ml-9 after:z-0">
			{steps.map(({checkStep, text}) => {
				return (
					<div key={checkStep}>
						<div  className="flex justify-center w-full z-10 relative">
							<div className="inline-flex flex-col items-center">
								<div className={`mb-2 w-[32px] h-[32px] flex items-center justify-center text-[#818181] rounded-full
								${checkStep == step?  'bg-black text-white' : 'bg-[#e1e1e1]'}`}>{checkStep}</div>
								<p className="text-sm">{text}</p>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}