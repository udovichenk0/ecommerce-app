// eslint-disable-next-line import/no-internal-modules
import logo from '@/shared/assets/logo.png'

import { links } from "./config"

// searchModel
export const Footer = () => {
	return (
		<div className="w-full h-24 bg-[#f0f0f0]">
			<div className="text-light-dark w-full h-full flex items-center justify-between container">
			<p className="text-light-dark">Developed by <a href={links.github}>kkkkhe</a></p>
			<div className="flex items-center gap-3">
				<div className="w-28 h-auto">
					<img className="w-full h-auto" src={logo} alt="" />
				</div>
				<p>© 2022</p>
			</div>
			<p className="text-light-dark">See this project <a href={links.project} className='underline'>HERE</a></p>
		</div>
		</div>
		
	)
}