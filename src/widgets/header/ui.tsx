import { Link } from 'react-router-dom'

import { SearchProduct } from '@/features/search'
// eslint-disable-next-line import/no-internal-modules
import { ShopBag } from '@/shared/assets/bag'
// eslint-disable-next-line import/no-internal-modules
import logo from '@/shared/assets/logo.png'
import { SignBtn, SingUp } from '@/shared/ui/buttons'

import { links } from './config'



export const Header = () => {
	return (
		<div className='pt-8 pb-20'>
			<div className='flex items-center container justify-between'>
				<div className='flex items-center'>
					<Link to={'/'}>
					<div className='w-[179px] h-[65px]'>
						<img src={logo} alt="Logo" className='w-full h-full' />
					</div>
				</Link>
				<nav>
					<ul className='flex items-center text-[#101010ba] font-medium'>
						{links.map(({link, title}) => {
							return (
								<li key={title} className='py-[10px] px-4'><Link to={link}>{title}</Link></li>
							)
						})}
					</ul>
				</nav>
				</div>
				
			<div className='flex items-center'>
				<SearchProduct/>
				<div className='w-6 mr-12'>
					<ShopBag/>
				</div>
				<SingUp/>
				<SignBtn title='Sign In' link='/signin'/>
			</div>
			</div>
			
		</div>
	)
}