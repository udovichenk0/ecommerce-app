import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { basketModel } from '@/entities/basket'
import { viewerModel } from '@/entities/viewer'
import { SearchProduct } from '@/features/search'
import { firebase } from '@/shared/api'
// eslint-disable-next-line import/no-internal-modules
import logo from '@/shared/assets/logo.png'
import { useAppSelector } from '@/shared/lib/redux-std'
import { useAuth } from '@/shared/lib/useAuth'
import { ShopBag, SignBtn, SingUp } from '@/shared/ui/buttons'

import { BasketSideMenu } from './basket'
import { links } from './config'
import { Profile } from './profile'




export const Header = () => {
	const [isOpened, setOpen] = useState<boolean>(false)
	const basket = useAppSelector(basketModel.selectors.basket)
	const profile = useAppSelector(viewerModel.selectors.profile)

	useEffect(() => {
		if(useAuth(profile)) firebase.setBasket(basket, profile.uid)
	}, [basket])
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
				<ShopBag setOpen={setOpen} basketLength={basket.length}/>
				{useAuth(profile)? <Profile name={profile.name} photo={profile.avatar}/>
				:	<>
					<SingUp/>
					<SignBtn title='Sign In' link='/signin'/>
					</>
				}
				<BasketSideMenu isOpened={isOpened} setOpen={setOpen}/>
			</div>
			</div>
			
		</div>
	)
}