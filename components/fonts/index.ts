import localFont from 'next/font/local'

export const TTHoves = localFont({
	src: [
		{
			path: '../../public/fonts/TT Hoves/TTHoves-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/TT Hoves/TTHoves-Bold.woff2',
			weight: '700',
			style: 'bold',
		},
		{
			path: '../../public/fonts/TT Hoves/TTHoves-Medium.woff2',
			weight: '500',
			style: 'medium',
		},
	],
	variable: '--font-tthoves',
})
