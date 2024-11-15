import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				messiri: ['var(--font-el-messiri)'],
				montserrat: ['var(--font-montserrat)'],
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				gray: "var(--gray)",
				'dark-gray': "var(--dark-gray)",
				green: "var(--green)",
				'dark-blue': "var(--dark-blue)",
				'dark-white': "var(--dark-white)",
				'dark-text-color': "var(--dark-blue)",
				'light-info-color': "var(--dark-white)",
				'dark-info-color': "var(--blue)",
			},
		},
	},
	plugins: [],
}
export default config