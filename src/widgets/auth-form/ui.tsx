import { GitHubAuth, GoogleAuth } from "@/features/auth"

export const AuthForm = ({children, title, button, text}:any) => {
	return (
		<div className="h-full w-full flex justify-center items-center">
		<div className="w-[800px] h-auto border-2 border-[#c5c5c5]">
				<div className="text-main-dark font-bold text-xl p-8">{title}</div>
			<div className="pb-8 px-8 md:flex items-center justify-center">
				{children}
				<div className=" relative mx-14 flex justify-center">
					<span className="hidden md:block after:content-[''] after:left-1/2 after:bottom-10 after:absolute after:h-24 after:w-[1px] after:bg-[#e1e1e1]
					before:content-[''] before:left-1/2 before:top-10 before:absolute before:h-24 before:w-[1px] before:bg-[#e1e1e1]
					">
					</span>
					<span className="text-[#1a1a1a] font-bold text-sm">
						OR
					</span>
				</div>
				<div className="md:w-[60%] md:flex md:flex-col gap-3 mt-5 md:mt-0 grid grid-cols-2  max-[550px]:grid-cols-1">
					<GitHubAuth/>
					<GoogleAuth/>
				</div>
			</div>
				<div className=" w-full h-16 gap-7 border-t-2 border-[#c5c5c5] flex items-center justify-center bg-lgrey">
					<p className="font-medium">{text}</p>
					{button}
				</div>
		</div>
	</div>
	)
}