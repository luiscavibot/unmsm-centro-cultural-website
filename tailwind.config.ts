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
				'gradiente-carrusel-portada-lg':
					'linear-gradient(90deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 62%)',
				'gradiente-carrusel-portada':
					'linear-gradient(0deg, rgba(6, 7, 7, 0.64) 0%, rgba(6, 7, 7, 0.64) 100%)',
				'gradiente-courses-and-workshops-home':
					'linear-gradient(to right, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 50%)',
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
				'gray-2': 'var(--gray-2)',
				'dark-gray': 'var(--dark-gray)',
				'dark-gray-transparent': 'var(--dark-gray-transparent)',
				'dark-gray-2': 'var(--dark-gray-2)',
				green: 'var(--green)',
				'green-2': 'var(--green-2)',
				'light-green': 'var(--light-green)',
				blue: 'var(--blue)',
				'blue-2': 'var(--blue-2)',
				'dark-blue': 'var(--dark-blue)',
				'dark-blue-2': 'var(--dark-blue-2)',
				'dark-blue-2/70': 'var(--dark-blue-2-opacity-70)',
				'dark-white': 'var(--dark-white)',
				'dark-white-2': 'var(--dark-white-2)',
				'dark-white-3': 'var(--dark-white-3)',
				'dark-text-color': 'var(--dark-blue)',
				'light-info-color': 'var(--dark-white)',
				'dark-info-color': 'var(--blue)',
				'red-custom': 'var(--red)',
				'red-2': 'var(--red-2)',
				'dark-red': 'var(--dark-red)',
				'dark-red-2': 'var(--dark-red-2)',
				'dark-red-3': 'var(--dark-red-3)',
				'orange-custom': 'var(--orange)',
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
				'light-gray': 'var(--light-gray)',
				'light-gray-2': 'var(--light-gray-2)',
				'primary-button-dark': {
					text: 'var(--text-color-primary-button-dark)',
					'text-hover': 'var(--text-color-primary-button-dark-hover)',
					'text-active':
						'var(--text-color-primary-button-dark-active)',
					'text-disabled':
						'var(--text-color-primary-button-dark-disabled)',
					bg: 'var(--bg-color-primary-button-dark)',
					'bg-hover': 'var(--bg-color-primary-button-dark-hover)',
					'bg-active': 'var(--bg-color-primary-button-dark-active)',
					'bg-disabled':
						'var(--bg-color-primary-button-dark-disabled)',
					border: 'var(--border-color-primary-button-dark)',
					'border-hover':
						'var(--border-color-primary-button-dark-hover)',
					'border-active':
						'var(--border-color-primary-button-dark-active)',
					'border-disabled':
						'var(--border-color-primary-button-dark-disabled)',
				},
				'primary-button-light': {
					text: 'var(--text-color-primary-button-light)',
					'text-hover':
						'var(--text-color-primary-button-light-hover)',
					'text-active':
						'var(--text-color-primary-button-light-active)',
					'text-disabled':
						'var(--text-color-primary-button-light-disabled)',
					bg: 'var(--bg-color-primary-button-light)',
					'bg-hover': 'var(--bg-color-primary-button-light-hover)',
					'bg-active': 'var(--bg-color-primary-button-light-active)',
					'bg-disabled':
						'var(--bg-color-primary-button-light-disabled)',
					border: 'var(--border-color-primary-button-light)',
					'border-hover':
						'var(--border-color-primary-button-light-hover)',
					'border-active':
						'var(--border-color-primary-button-light-active)',
					'border-disabled':
						'var(--border-color-primary-button-light-disabled)',
				},
				'secondary-button-dark': {
					text: 'var(--text-color-secondary-button-dark)',
					'text-hover':
						'var(--text-color-secondary-button-dark-hover)',
					'text-active':
						'var(--text-color-secondary-button-dark-active)',
					'text-disabled':
						'var(--text-color-secondary-button-dark-disabled)',
					bg: 'var(--bg-color-secondary-button-dark)',
					'bg-hover': 'var(--bg-color-secondary-button-dark-hover)',
					'bg-active': 'var(--bg-color-secondary-button-dark-active)',
					'bg-disabled':
						'var(--bg-color-secondary-button-dark-disabled)',
					border: 'var(--border-color-secondary-button-dark)',
					'border-hover':
						'var(--border-color-secondary-button-dark-hover)',
					'border-active':
						'var(--border-color-secondary-button-dark-active)',
					'border-disabled':
						'var(--border-color-secondary-button-dark-disabled)',
				},
				'secondary-button-light': {
					text: 'var(--text-color-secondary-button-light)',
					'text-hover':
						'var(--text-color-secondary-button-light-hover)',
					'text-active':
						'var(--text-color-secondary-button-light-active)',
					'text-disabled':
						'var(--text-color-secondary-button-light-disabled)',
					bg: 'var(--bg-color-secondary-button-light)',
					'bg-hover': 'var(--bg-color-secondary-button-light-hover)',
					'bg-active':
						'var(--bg-color-secondary-button-light-active)',
					'bg-disabled':
						'var(--bg-color-secondary-button-light-disabled)',
					border: 'var(--border-color-secondary-button-light)',
					'border-hover':
						'var(--border-color-secondary-button-light-hover)',
					'border-active':
						'var(--border-color-secondary-button-light-active)',
					'border-disabled':
						'var(--border-color-secondary-button-light-disabled)',
				},
				'tertiary-button-dark': {
					text: 'var(--text-color-tertiary-button-dark)',
					'text-hover':
						'var(--text-color-tertiary-button-dark-hover)',
					'text-active':
						'var(--text-color-tertiary-button-dark-active)',
					'text-disabled':
						'var(--text-color-tertiary-button-dark-disabled)',
					bg: 'var(--bg-color-tertiary-button-dark)',
					'bg-hover': 'var(--bg-color-tertiary-button-dark-hover)',
					'bg-active': 'var(--bg-color-tertiary-button-dark-active)',
					'bg-disabled':
						'var(--bg-color-tertiary-button-dark-disabled)',
					border: 'var(--border-color-tertiary-button-dark)',
					'border-hover':
						'var(--border-color-tertiary-button-dark-hover)',
					'border-active':
						'var(--border-color-tertiary-button-dark-active)',
					'border-disabled':
						'var(--border-color-tertiary-button-dark-disabled)',
				},
				'tertiary-button-light': {
					text: 'var(--text-color-tertiary-button-light)',
					'text-hover':
						'var(--text-color-tertiary-button-light-hover)',
					'text-active':
						'var(--text-color-tertiary-button-light-active)',
					'text-disabled':
						'var(--text-color-tertiary-button-light-disabled)',
					bg: 'var(--bg-color-tertiary-button-light)',
					'bg-hover': 'var(--bg-color-tertiary-button-light-hover)',
					'bg-active': 'var(--bg-color-tertiary-button-light-active)',
					'bg-disabled':
						'var(--bg-color-tertiary-button-light-disabled)',
					border: 'var(--border-color-tertiary-button-light)',
					'border-hover':
						'var(--border-color-tertiary-button-light-hover)',
					'border-active':
						'var(--border-color-tertiary-button-light-active)',
					'border-disabled':
						'var(--border-color-tertiary-button-light-disabled)',
				},
			},
		},
	},
	plugins: [],
};
export default config;
