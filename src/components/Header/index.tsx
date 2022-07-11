import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { LeftArrowIcon, MenuOpenIcon, RightArrowIcon } from '@icons'

import { setSidebarActive } from '@redux/slices/sidebarSlice'
import { logout } from '@redux/slices/userSlice'

const Header: React.FC = () => {
	const dispatch = useDispatch()
	const { user } = useSelector((state: any) => state.user)

	const handleOpenMenu = () => {
		dispatch(setSidebarActive())
	}

	const handleLogout = () => {
		dispatch(logout())
	}

	return (
		<header className='bg-[#070707] flex-1 flex justify-between items-center py-[10px] px-[13px] sm:px-[32px] sticky top-0 z-10'>
			<div className='flex'>
				<div className='mr-[8px] text-[#969696] p-1 -ml-1.5 inline-block lg:hidden' onClick={handleOpenMenu}>
					<MenuOpenIcon />
				</div>
				<div className='mr-[8px] text-[#969696] p-1 cursor-not-allowed'>
					<LeftArrowIcon />
				</div>
				<div className='ml-[8px] text-[#969696] p-1 cursor-not-allowed'>
					<RightArrowIcon />
				</div>
			</div>
			<div>
				{user ? (
					<>
						<button
							onClick={handleLogout}
							className='bg-white text-[#2e2e2e] text-xs font-semibold leading-5 tracking-widest uppercase py-[9px] px-[17px] sm:px-[38px] rounded-full hover:scale-105'>
							Logout
						</button>
					</>
				) : (
					<>
						<Link to={'/register'}>
							<button className='text-white text-xs font-semibold leading-5 tracking-widest uppercase py-[9px] px-[17px] sm:px-[38px] rounded-full hover:scale-105'>
								Sign Up
							</button>
						</Link>
						<Link to={'/login'}>
							<button className='bg-white text-[#2e2e2e] text-xs font-semibold leading-5 tracking-widest uppercase py-[9px] px-[17px] sm:px-[38px] rounded-full hover:scale-105'>
								Log In
							</button>
						</Link>
					</>
				)}
			</div>
		</header>
	)
}

export default Header
