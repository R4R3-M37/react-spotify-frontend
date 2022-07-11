import React from 'react'

export const HomeIcon: React.FC = React.memo(() => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-6 w-6'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
			/>
		</svg>
	)
})

export const SearchIcon: React.FC = React.memo(() => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-6 w-6'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
			/>
		</svg>
	)
})

export const LibraryIcon: React.FC = React.memo(() => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-6 w-6'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2'
			/>
		</svg>
	)
})

export const CreateIcon: React.FC = React.memo(() => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-6 w-6'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
			/>
		</svg>
	)
})

export const FavoriteIcon: React.FC = React.memo(() => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-6 w-6'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
			/>
		</svg>
	)
})

export const SpotifyIcon = React.memo(({ className, style }: any) => {
	return (
		<svg viewBox='0 0 1134 340' className={className} style={style}>
			<path
				fill='currentColor'
				d='M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z'></path>
		</svg>
	)
})

export const StartListeningIcon = React.memo(({ className }: any) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={`h-5 w-5 ${className}`}
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'>
			<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
		</svg>
	)
})

export const MenuOpenIcon = React.memo(() => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-6 w-6'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'>
			<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
		</svg>
	)
})

export const RightArrowIcon = React.memo(() => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-6 w-6'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'>
			<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
		</svg>
	)
})

export const LeftArrowIcon = React.memo(() => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-6 w-6'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'>
			<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7' />
		</svg>
	)
})

export const LoginFacebookIcon = React.memo(() => {
	return (
		<svg className='h-6 w-6 fill-current text-gray-700' viewBox='0 0 512 512'>
			<path d='M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z' />
		</svg>
	)
})
export const LoginGoogleIcon = React.memo(() => {
	return (
		<svg className='h-6 w-6 fill-current text-gray-700' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 488 512'>
			<path d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z' />
		</svg>
	)
})
export const LoginTweeterIcon = React.memo(() => {
	return (
		<svg className='h-6 w-6 fill-current text-gray-700' viewBox='0 0 512 512'>
			<path d='M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z' />
		</svg>
	)
})
