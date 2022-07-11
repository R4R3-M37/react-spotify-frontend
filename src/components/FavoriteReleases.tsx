import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { StartListeningIcon } from '@icons'

import Authpage from '@pages/Auth'

import { setCurrentObject } from '@redux/slices/itemSlice'

const FavoriteReleases: React.FC = () => {
	const dispatch = useDispatch()
	const { user } = useSelector((state: any) => state.user)
	const { playlist } = useSelector((state: any) => state)

	const itemsFiltered = playlist.items.filter((item: any) => playlist.favoriteID.includes(item.id))

	const handleClick = (item: any) => {
		dispatch(setCurrentObject(item))
	}

	return (
		<>
			{itemsFiltered.length > 0 && user ? (
				<div className='grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5'>
					{itemsFiltered.slice(0, 5).map((item: any) => (
						<Link
							to={item.title}
							onContextMenu={() => handleClick(item)}
							className='relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group'
							key={item.id + item.link + item.title}>
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
			) : (
				<Authpage />
			)}
		</>
	)
}

export default FavoriteReleases
