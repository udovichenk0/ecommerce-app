import { ShopBag } from '@/shared/assets/bag'
import logo from '@/shared/assets/logo.png'
import { Link } from 'react-router-dom'
import { SignIn } from '../buttons/SignIn'
import { SingUp } from '../buttons/SignUp/ui'

export const Header = () => {
	return (
		<div className='py-8'>
			<div className='flex items-center container justify-between'>
				<div className='flex items-center'>
					<Link to={'/'}>
					<div className='w-[179px] h-full'>
						<img src={logo} alt="Logo" className='w-full h-full' />
					</div>
				</Link>
				<nav>
					<ul className='flex items-center text-tr-dark font-medium'>
						<li className='py-[10px] px-4 text-main-dark'><Link to={'/'}>Home</Link></li>
						<li className='py-[10px] px-4'><Link to={'/'}>Shop</Link></li>
						<li className='py-[10px] px-4'><Link to={'/'}>Featured</Link></li>
						<li className='py-[10px] px-4'><Link to={'/'}>Recommended</Link></li>
					</ul>
				</nav>
				</div>
				
			<div className='flex items-center'>
				<input type="text" />
				<div className='w-6 mr-12'>
					<ShopBag/>
				</div>
				<SingUp/>
				<SignIn/>
			</div>
			</div>
			
		</div>
	)
}