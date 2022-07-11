import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { StartListeningIcon } from '@icons'

import { setCurrentObject } from '@redux/slices/itemSlice'
import FavoriteReleases from '@components/FavoriteReleases'

const Homepage: React.FC = () => {
	const dispatch = useDispatch()
	const { playlist } = useSelector((state: any) => state)
	const { user } = useSelector((state: any) => state.user)

	const itemsFiltered = playlist.items.filter((item: any) => playlist.favoriteID.includes(item.id))

	const handleClick = (item: any) => {
		dispatch(setCurrentObject(item))
	}
	return (
		<main className='text-white relative'>
			<div className='h-full bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full' />
			<div className='relative pt-[24px] pb-[48px] px-[32px] space-y-9 max-w-screen-5xl'>
				<div>
					<div className='flex flex-wrap justify-between items-end gap-x-6 mb-[18px]'>
						<div>
							<h2 className='text-2xl font-semibold hover:underline capitalize'>
								<Link to={`/release/latest`}>Latest Releases</Link>
							</h2>
						</div>
						{playlist.items.length > 5 && (
							<Link
								to={`/release/latest`}
								className='uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6'>
								See all
							</Link>
						)}
					</div>
					<div className='grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5'>
						{playlist.items.slice(0, 5).map((item: any) => (
							<Link
								to={item.title}
								onContextMenu={() => handleClick(item)}
								className='relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group'
								key={item.id}>
								<div className='relative'>
									<img src={item.imageURL} className='rounded shadow-lg' loading='lazy' alt='' />
									<button className='h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105'>
										<StartListeningIcon />
									</button>
								</div>
								<h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>{item.title}</h3>
								<p className='text-sm text-[#b3b3b3] line-clamp-2'>{item.author}</p>
							</Link>
						))}
					</div>
				</div>
				<div>
					<div className='flex flex-wrap justify-between items-end gap-x-6 mb-[18px]'>
						<div>
							<h2 className='text-2xl font-semibold hover:underline capitalize'>
								<Link to={'/library'}>Your Library</Link>
							</h2>
						</div>
						{itemsFiltered.length > 5 && (
							<Link
								to={'/library'}
								className='uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6'>
								See all
							</Link>
						)}
					</div>
					<FavoriteReleases />
				</div>
			</div>
		</main>
	)
}

export default Homepage
