import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addToFavorite, removeFromFavorite, setCurrentObject } from '@redux/slices/itemSlice'

import { RightArrowIcon } from '@icons'

const CustomContextMenu: React.FC = () => {
	const dispatch = useDispatch()
	const [show, setShow] = useState<boolean>(false)
	const { playlist } = useSelector((state: any) => state)

	const [anchorPoint, setAnchorPoint] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

	const anchorMoreRef = useRef<HTMLUListElement>(null)
	const [activeMore, setActiveMore] = useState<boolean>(false)

	const handleAddToFavorite = () => {
		if (!playlist.favoriteID.includes(playlist.currentObject.id)) {
			dispatch(addToFavorite(playlist.currentObject.id))
		}
	}
	const handleRemoveFromFavorite = () => {
		if (playlist.favoriteID.includes(playlist.currentObject.id)) {
			dispatch(removeFromFavorite(playlist.currentObject.id))
		}
	}

	const handleActiveMoreData = () => {
		setActiveMore(true)
	}
	const handleOutsideMoreData = (e: any) => {
		if (e.relatedTarget && anchorMoreRef.current && e.relatedTarget !== anchorMoreRef.current) {
			setActiveMore(false)
		}
	}

	const handleRightClick = (e: any) => {
		e.preventDefault()
		setAnchorPoint({ x: e.pageX, y: e.pageY })
		setShow((show: boolean) => !show)
	}
	const handleClickOutside = (e: any) => {
		setShow(false)
	}

	useEffect(() => {
		if (!show) {
			dispatch(setCurrentObject(null))
			setActiveMore(false)
		}
	}, [show])

	useEffect(() => {
		document.addEventListener('contextmenu', handleRightClick)
		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('contextmenu', handleRightClick)
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])

	return (
		<>
			{show && (
				<ul
					className='absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10'
					style={{
						position: 'fixed',
						top: anchorPoint.y,
						left: anchorPoint.x,
						zIndex: '9999',
					}}>
					{playlist.currentObject ? (
						<>
							{playlist.favoriteID.includes(playlist.currentObject.id) ? (
								<li>
									<button
										className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default'
										onClick={handleRemoveFromFavorite}>
										Remove from Library
									</button>
								</li>
							) : (
								<li>
									<button
										className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default'
										onClick={handleAddToFavorite}>
										Add to Your Library
									</button>
								</li>
							)}
							<li className='relative'>
								<button
									className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center'
									onMouseEnter={handleActiveMoreData}
									onMouseLeave={(e) => handleOutsideMoreData(e)}>
									Share
									<RightArrowIcon />
								</button>
								{activeMore && (
									<ul
										className='absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default'
										ref={anchorMoreRef}>
										<li>
											<button className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default'>
												Copy link to playlist
											</button>
										</li>
										<li>
											<button className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default'>
												Embed playlist
											</button>
										</li>
									</ul>
								)}
							</li>
							<li>
								<button className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default'>
									About recommendations
								</button>
							</li>
							<li>
								<button className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default'>
									Open in Desktop app
								</button>
							</li>
						</>
					) : (
						<>
							<li>
								<button className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default'>
									About recommendations
								</button>
							</li>
							<li>
								<button className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default'>
									Cookies
								</button>
							</li>
							<li>
								<button className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default'>
									Privacy
								</button>
							</li>
						</>
					)}
				</ul>
			)}
		</>
	)
}

export default CustomContextMenu
