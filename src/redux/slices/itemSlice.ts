import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
	items: [
		{
			id: 1,
			imageURL:
				'https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2Fe04ee32959fa00f6f59153f5e9a0f39d.1000x1000x1.png',
			title: 'X',
			author: '21 Savage & Metro Boomin',
			description:
				'21 Savage teams up with fellow Atlanta rapper Future for the ominous track “X.” On the track, the two emcees rap about their ex-girlfriends and past endeavors, flexing on them with their money and luxurious lifestyles, all over an eerie, high bass instrumental.',
			genre: 'Hip-Hop',
			producedBy: '21 Savage & Metro Boomin',
			createdAt: '15.7.2016',
		},
		{
			id: 2,
			imageURL:
				'https://t2.genius.com/unsafe/308x308/https%3A%2F%2Fimages.genius.com%2Fc94f15e24685dc8cd8cb3799b57fad7a.1000x1000x1.png',
			title: 'Gucci Gang',
			author: 'Lil Pump',
			description:
				'On “Gucci Gang,” Lil Pump raps about women, money, drugs, jewelry, and high-end clothing—all recurring topics in Pump’s music.\n' +
				'\n' +
				'The song became highly successful, debuting at #81 and peaking at #3 on the Billboard Hot 100, giving Lil Pump his first single to chart the Billboard Hot 100.\n' +
				'\n' +
				'The music video was released October 23rd, 2017.\n' +
				'\n' +
				'On March 17th, 2018, a remix of the track appeared during the return episode of OVO Sound Radio, featuring the braggadocious Gucci-wearing rappers 21 Savage, Gucci Mane, Bad Bunny, J Balvin, Ozuna, and French Montana.',
			genre: 'Hip-Hop',
			producedBy: 'Gnealz & Bighead',
			createdAt: '27.8.2017',
		},
		{
			id: 3,
			imageURL:
				'https://t2.genius.com/unsafe/297x297/https%3A%2F%2Fimages.genius.com%2Febcd617ce004acf5317f586f1afcabd6.1000x1000x1.jpg',
			title: 'CAPS LOKK',
			author: 'TVETH',
			description:
				'On “Gucci Gang,” Lil Pump raps about women, money, drugs, jewelry, and high-end clothing—all recurring topics in Pump’s music.\n' +
				'\n' +
				'The song became highly successful, debuting at #81 and peaking at #3 on the Billboard Hot 100, giving Lil Pump his first single to chart the Billboard Hot 100.\n' +
				'\n' +
				'The music video was released October 23rd, 2017.\n' +
				'\n' +
				'On March 17th, 2018, a remix of the track appeared during the return episode of OVO Sound Radio, featuring the braggadocious Gucci-wearing rappers 21 Savage, Gucci Mane, Bad Bunny, J Balvin, Ozuna, and French Montana.',
			genre: 'Hip-Hop',
			producedBy: 'LIL SMOOKY',
			createdAt: '25.10.2019',
		},
		{
			id: 4,
			imageURL:
				'https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2F2c878c1ab0691000f2bc1ff7010402b7.966x966x1.png',
			title: 'Running Up That Hill',
			author: 'Kate Bush',
			description:
				'“Running Up That Hill (A Deal With God)” is the first single from Kate Bush’s 1985 LP Hounds of Love. The song’s original title, “A Deal With God”, was changed at the insistence of EMI’s marketing department to be more palatable to religious countries.\n' +
				'\n' +
				'The single was released on August 5th, 1985, a month before the album’s release. The song originally peaked at No. 3 on the UK charts, No. 6 on Australian charts and No. 30 on the US Billboard Hot 100. In the US, it remains Bush’s first and only major charting success.',
			genre: 'Art rock',
			producedBy: 'Kate Bush',
			createdAt: '25.10.2019',
		},
		{
			id: 5,
			imageURL:
				'https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2Fd8f65b667cb1f2c8367c8d3defca6c6d.1000x1000x1.png',
			title: 'Betty',
			author: 'Yung Gravy',
			description:
				'First played at concerts, then published on IG feed on 19th December 2021. In the same post, Yung Gravy has annouced new album.',
			genre: 'R&B',
			producedBy: 'Nick Seeley, Dillon Francis & 1 more',
			createdAt: '10.6.2022',
		},
		{
			id: 6,
			imageURL:
				'https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2Fcee9ac6b56e2ac7fb10a40a577a2ab91.1000x1000x1.jpg',
			title: 'Part of the Band',
			author: 'The 1975',
			description:
				'Matty confirmed on Reddit that the song “Part of the band” originated from a bridge written for the unreleased song “New York” by Benjamin Francis Leftwich.',
			genre: 'Folk rock',
			producedBy: 'George Daniel, Jack Antonoff & 1 more',
			createdAt: '7.7.2022',
		},
	],
	currentObject: null,
	favoriteID: [1, 4, 5],
}

export const itemSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		setCurrentObject: (state, action) => {
			state.currentObject = action.payload
		},
		addToFavorite: (state, action) => {
			state.favoriteID.push(action.payload)
		},
		removeFromFavorite: (state, action) => {
			const filtered = state.favoriteID.filter((id: number) => id !== action.payload)
			state.favoriteID = filtered
		},
	},
})

export const { setCurrentObject, addToFavorite, removeFromFavorite } = itemSlice.actions

export default itemSlice.reducer
