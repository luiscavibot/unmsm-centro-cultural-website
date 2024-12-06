import type { Config } from 'tailwindcss';

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
			backgroundImage: {
				'gradiente-carrusel-portada':
					'linear-gradient(90deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 62%)',
			},
			backgroundColor: {
				'light-arrow-button-color': {
					DEFAULT: 'var(--dark-white-2)',
					hover: 'var(--dark-white-2)',
					pressed: 'var(--light-gray)',
					disabled: 'var(--light-gray)',
				},
				'dark-arrow-button-color': {
					DEFAULT: 'var(--gray)',
					hover: 'var(--dark-gray)',
					pressed: 'var(--black)',
					disabled: 'var(--light-gray)',
				},
				'courses-and-workshops': {
					DEFAULT: 'var(--dark-gray)',
				},
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				'black-custom': 'var(--black)',
				gray: 'var(--gray)',
				'dark-gray': 'var(--dark-gray)',
				'dark-gray-transparent': 'var(--dark-gray-transparent)',
				'dark-gray-2': 'var(--dark-gray-2)',
				green: 'var(--green)',
				'dark-blue': 'var(--dark-blue)',
				'dark-blue-2': 'var(--dark-blue-2)',
				'dark-white': 'var(--dark-white)',
				'dark-white-2': 'var(--dark-white-2)',
				'dark-text-color': 'var(--dark-blue)',
				'light-info-color': 'var(--dark-white)',
				'dark-info-color': 'var(--blue)',
				'red-custom': 'var(--red)',
				'dark-red': 'var(--dark-red)',
				'dark-red-2': 'var(--dark-red-2)',
				'light-arrow-color': {
					DEFAULT: 'var(--gray)',
					hover: 'var(--dark-gray)',
					pressed: 'var(--gray)',
					disabled: 'var(--dark-white-3)',
				},
				'dark-arrow-color': {
					DEFAULT: '#fff',
					hover: '#fff',
					pressed: '#fff',
					disabled: 'var(--dark-white-3)',
				},
				'light-bg-button-color': {
					DEFAULT: 'var(--dark-white-2)',
					hover: 'var(--dark-white-4)',
				},
				'light-text-button-color': 'var(--gray)',
			},
		},
	},
	plugins: [],
};
export default config;
