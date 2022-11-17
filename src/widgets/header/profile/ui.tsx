import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SignOut } from '@/features/sign-out'
// eslint-disable-next-line import/no-internal-modules
import defaultUser from '@/shared/assets/defaultUser.png'
import { useClickOutside } from '@/shared/lib/use-click-outside'
import { GreyButton } from '@/shared/ui/buttons'
import { ProfileDropDown } from '@/shared/ui/profile-drop-down'

export const Profile = ({name, photo}: {name:string, photo: string}) => {
	const [isOpened, setOpen] = useState<boolean>(false)
	const navigate = useNavigate()
	const reference = useRef(null)
	useClickOutside(() => setOpen(false), reference, isOpened)
	return (
		<div className='menu relative'>
			<button 
			onClick={() => setOpen(prev => !prev)}
			ref={reference} className="flex items-center gap-3">
				<h2>{name}</h2>
				<div className='w-[30px] h-[30px]'>
					<img className='w-full h-full' src={photo || defaultUser} alt="" />
				</div>
			</button>
			{isOpened && 
			<ProfileDropDown reference={reference}>
				<GreyButton label='View Account' action={() => navigate('/account')}/>
				<SignOut/>
			</ProfileDropDown>}
		</div>
			
	)
}