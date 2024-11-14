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
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				gray: "var(--gray)",
				'dark-gray': "var(--dark-gray)",
				green: "var(--green)",
			},
		},
	},
	plugins: [],
}
export default config