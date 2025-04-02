import type { ResponsiveOptions } from '@splidejs/splide';

const splideOptionsCollections: ResponsiveOptions = {
	type: 'slide',
	width: '100%',
	fixedWidth: 'auto',
	fixedHeight: '512px',
	arrows: false,
	pagination: false,
	gap: '24px',
	perMove: 1,
	breakpoints: {
		1024: {
			fixedWidth: '100%',
			fixedHeight: '400px',
			perMove: 1,
		},
	},
};

export default splideOptionsCollections;