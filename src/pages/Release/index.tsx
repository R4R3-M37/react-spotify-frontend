import React from 'react'
import { useParams } from 'react-router-dom'

import FavoriteReleases from '@components/FavoriteReleases'

const Release: React.FC = () => {
	const { type } = useParams()

	return (
		<main className='text-white relative'>
			<div className='h-full bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full' />
			<div className='relative pt-[24px] pb-[48px] px-[32px] space-y-9 max-w-screen-5xl'>
				<div>
					<div className='flex flex-wrap justify-between items-end gap-x-6 mb-[18px]'>
						<div>
							<h2 className='text-2xl font-semibold capitalize'>{type} Releases</h2>
						</div>
					</div>
					<FavoriteReleases />
				</div>
			</div>
		</main>
	)
}

export default Release
