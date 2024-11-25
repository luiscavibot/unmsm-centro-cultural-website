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
				'black-custom': "var(--black)",
				gray: "var(--gray)",
				'dark-gray': "var(--dark-gray)",
				green: "var(--green)",
				'dark-blue': "var(--dark-blue)",
				'dark-blue-2': "var(--dark-blue-2)",
				'dark-white': "var(--dark-white)",
				'dark-text-color': "var(--dark-blue)",
				'light-info-color': "var(--dark-white)",
				'dark-info-color': "var(--blue)",
				'red-custom': "var(--red)",
				'light-arrow-button-color': "var(--dark-white-2)",
				'dark-arrow-button-color': "var(--light-gray)",
				'light-arrow-color': "var(--dark-white-3)",
				'dark-arrow-color': "var(--gray)",
			},
		},
	},
	plugins: [],
}
export default config