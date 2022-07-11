import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { FavoriteIcon, HomeIcon, LibraryIcon, SpotifyIcon } from '@icons'

import { setSidebarClosed } from '@redux/slices/sidebarSlice'

interface ISidebarMenu {
	icon: React.ReactNode
	title: string
	link: string
}

const Sidebar: React.FC = () => {
	const location = useLocation()
	const [activeSidebar, setActiveSidebar] = useState<string>(location.pathname)
	const dispatch = useDispatch()
	const { active } = useSelector((state: any) => state.sidebar)

	const sidebarMenu: ISidebarMenu[] = [
		{ icon: <HomeIcon />, title: 'Home', link: '/' },
		{ icon: <LibraryIcon />, title: 'Your Library', link: '/library' },
		{ icon: <FavoriteIcon />, title: 'Liked Songs', link: '/release/favorite' },
	]

	const handleClickOutside = () => {
		dispatch(setSidebarClosed())
	}

	const handleChangeActive = (link: string) => {
		setActiveSidebar(link)
		dispatch(setSidebarClosed())
	}

	return (
		<>
			<aside
				className={
					active
						? 'bg-black w-[256px] text-[#b2b2b2] overflow-hidden flex flex-col fixed lg:sticky top-0 z-30 h-screen lg:h-auto -translate-x-full translate-x-0 lg:translate-x-0 transition-transform peer'
						: 'bg-black w-[256px] text-[#b2b2b2] overflow-hidden flex flex-col fixed lg:sticky top-0 z-30 h-screen lg:h-auto -translate-x-full target:translate-x-0 lg:translate-x-0 transition-transform peer'
				}>
				<Link to={'/'} className='text-white inline-block my-6 px-6 w-full'>
					<SpotifyIcon className={'w-[130px]'} />
				</Link>
				<nav>
					{sidebarMenu.map((sidebarItem) => (
						<Link
							to={sidebarItem.link}
							onClick={() => handleChangeActive(sidebarItem.link)}
							className={
								activeSidebar === sidebarItem.link
									? `flex items-center text-white bg-[#282828] mx-2 px-4 py-2 rounded ${
											sidebarItem.link === '/library' && 'mb-6'
									  }`
									: `flex items-center text-white mx-2 px-4 py-2 rounded ${
											sidebarItem.link === '/library' && 'mb-6'
									  }`
							}
							key={sidebarItem.link}>
							{sidebarItem.icon}
							<span className='ml-4 text-sm font-semibold'>{sidebarItem.title}</span>
						</Link>
					))}
				</nav>
				<footer className='mt-auto mb-8 ml-6'>
					<ul>
						<li>
							<Link to={'/cookies'} className='text-[11px] hover:underline py-2'>
								Cookies
							</Link>
						</li>
						<li>
							<Link to={'/privacy'} className='text-[11px] hover:underline py-2'>
								Privacy
							</Link>
						</li>
					</ul>
				</footer>
			</aside>
			<div
				onClick={handleClickOutside}
				className={
					active
						? 'fixed inset-0 bg-black opacity-0 opacity-50 pointer-events-none pointer-events-auto z-20 lg:hidden cursor-default transition-opacity'
						: 'fixed inset-0 bg-black opacity-0 peer-target:opacity-50 pointer-events-none peer-target:pointer-events-auto z-20 lg:hidden cursor-default transition-opacity'
				}
			/>
		</>
	)
}

export default Sidebar
