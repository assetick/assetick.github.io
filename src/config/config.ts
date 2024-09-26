// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'AssetPulse. Tailwind CSS Astro Starter Kit by Oxygenna',
	siteDescription:
		'AssetPulse is a design and development agency that specializes in creating beautiful and functional websites.',
	ogImage: '/og.jpg',
	logo: {
		src: '/favicon-32x32-reverse.png', //'/logo.svg',
		alt: 'AssetPulse. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
