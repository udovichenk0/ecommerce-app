export const SpaLayout = ({form, title, children, SignButton, text}:any) => {
	return (
		<div className="h-full w-full flex justify-center items-center">
			<div className="w-[800px] h-auto border-2 border-[#c5c5c5]">
					<div className="text-main-dark font-bold text-xl p-8">{title}</div>
				<div className="pb-8 px-8 flex items-center justify-center">
					{form}
					<div className="relative mx-14">
						<span className="after:content-[''] after:left-1/2 after:bottom-10 after:absolute after:h-24 after:w-[1px] after:bg-[#e1e1e1]
						before:content-[''] before:left-1/2 before:top-10 before:absolute before:h-24 before:w-[1px] before:bg-[#e1e1e1]
						">
						</span>
						<span className="text-[#1a1a1a] font-bold text-sm">
							OR
						</span>
					</div>
					{children}
				</div>
					<div className="w-full h-16 gap-7 border-t-2 border-[#c5c5c5] flex items-center justify-center bg-lgrey">
						<p className="font-medium">{text}</p>
						{SignButton}
					</div>
			</div>
		</div>
	)
}