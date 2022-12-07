import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { basketModel } from '@/entities/basket'
import { viewerModel } from '@/entities/session'
import { SearchProduct } from '@/features/search'
import { firebase } from '@/shared/api'
// eslint-disable-next-line import/no-internal-modules
import logo from '@/shared/assets/logo.png'
import { useAppSelector } from '@/shared/lib/redux-std'
import { useAuth } from '@/shared/lib/useAuth'
import { ShopBag, LGreyButton, BlackBtnSm, BurgerButton } from '@/shared/ui/buttons'

import { BasketSideMenu } from './basket'
import { links } from './config'
import { Profile } from './profile'




export const Header = () => {
	const [isOpened, setOpen] = useState<boolean>(false)
	const [isNavOpened, setNavOpen] = useState<boolean>(false)
	const basket = useAppSelector(basketModel.selectors.basket)
	const profile = useAppSelector(viewerModel.selectors.profile)
	const navigate = useNavigate()
	useEffect(() => {
		if(useAuth(profile)) firebase.setBasket(basket, profile.uid)
	}, [basket])
	return (
			<div className='container pt-8 pb-20'>
				<div className='flex items-center justify-between mb-5 sm:mb-0'>
					<div className='xl:bg-[#f9f9f9] flex items-center xl:static'>
						<div className='bloc xl:hidden mr-5 flex'>
							<BurgerButton onHandle={() => setNavOpen(prev => !prev)} isNavOpened={isNavOpened}/>
						</div>

						<div className='w-[179px] h-[65px] hidden xl:block'>
							<Link to={'/'}>
									<img src={logo} alt="Logo" className='w-full h-full' />
							</Link>
						</div>
						
						<nav className={`justify-center fixed xl:static z-[10] top-0 ${isNavOpened? 'left-0' : '-left-full'} w-full xl:w-auto xl:h-fit xl:bg-[#f9f9f9] bg-white transition-all duration-300`}>
							<ul className='h-screen justify-center flex flex-col xl:flex-row xl:h-fit items-center text-[#101010ba] font-medium text-[30px] xl:text-[18px] gap-y-5'>
								{links.map(({link, title}) => {
									return (
										<li key={title} className='py-[10px] px-4'><Link to={link}>{title}</Link></li>
									)
								})}
							</ul>
						</nav>
					</div>
					<div className='flex items-center'>
						<div className='hidden sm:block w-[300px] mr-7'>
							<SearchProduct/>
						</div>
						<ShopBag setOpen={setOpen} basketLength={basket.length}/>
						{useAuth(profile)? <Profile name={profile.name} photo={profile.avatar}/>
						:	<div className='flex gap-5'>
							<BlackBtnSm label='Sign Up' action={() => navigate('/signup')}/>
							<LGreyButton label='Sign In' action={() => navigate("/signin", {replace:true})}/>
							</div>
						}
						<BasketSideMenu isOpened={isOpened} setOpen={setOpen}/>
					</div>
				</div>
				<div className='sm:hidden w-full'>
					<SearchProduct/>
				</div>
			</div>
	)
}