import { Menu } from '@/infrastructure/ui/interfaces/menu';

const menu: Menu[] = [
	{
		title: 'Noticias',
		url: '/noticias',
	},
	{
		title: 'Cursos y talleres',
		url: '/cursos-y-talleres',
	},
	{
		title: 'Direcciones artísticas',
		// url: '/direcciones-artisticas',
		'sub-menu': [
			{
				url: '/direcciones-artisticas/ballet',
				title: 'Ballet',
			},
			{
				url: '/direcciones-artisticas/folklore',
				title: 'Folklore',
			},
			{
				url: '/direcciones-artisticas/cine',
				title: 'Cine',
			},
			{
				url: '/direcciones-artisticas/musica',
				title: 'Música',
			},
			{
				url: '/direcciones-artisticas/teatro',
				title: 'Teatro',
			},
			{
				url: '/direcciones-artisticas/banda-universitaria',
				title: 'Banda',
			},
		],
	},
	{
		title: 'Museos',
		'sub-menu': [
			{
				title: 'Museo de Arte de San Marcos',
				url: '/museo-de-arte-de-san-marcos',
			},
			{
				title: 'Museo de Arqueología y Antropología',
				url: '/museo-de-arqueologia-y-antropologia',
			},
			{
				title: 'Exposiciones',
				url: '/exposiciones',
			},
		],
	},

	{
		title: 'Biblioteca',
		url: '/biblioteca',
	},
	{
		title: 'Nosotros',
		'sub-menu': [
			{
				title: 'Casona de San Marcos',
				url: '/nosotros/casona-de-san-marcos',
			},
			{
				title: 'Dependencias administrativas',
				url: '/nosotros/dependencias-administrativas',
			},
			{
				title: 'Directorio',
				url: '/directorio',
			},
		],
	},
	{
		title: 'Visítanos',
		url: '/visitanos',
	},
];

export default menu;
