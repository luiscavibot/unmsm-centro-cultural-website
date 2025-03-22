interface NewsDataToHome {
	slug: string;
	url: string;
	date: string;
	dateString: string;
	title: string;
	summary: string;
}

const newsDataToHome: NewsDataToHome[] = [
	{
		slug: 'noticia',
		url:
			'https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/noticia.webp',
		date: '2024-11-16',
		dateString: 'Viernes, 16 de noviembre',
		title: 'Ingreso Libre a las Salas del Museo de Arte de San Marcos - noviembre 2024',
		summary:
			'El Centro Cultural de San Marcos, en colaboración con la Dirección de Cine y Producción Audiovisual presentan el «Ciclo de cine peruano restaurado» busca visibilizar la importancia de la preservación y restauración del patrimonio cinematográfico nacional.',
	},
	{
		slug: 'noticia',
		url:
			'https://centroculturaldesanmarcos.wordpress.com/wp-content/uploads/2024/06/471323279_1040339011440129_5083329840655095651_n-1663273038-e1735313886440.jpg?w=1568',
		date: '2024-11-16',
		dateString: 'Viernes, 16 de noviembre',
		title: 'Convocatoria para integrar la Banda Sinfónica Universitaria de San Marcos',
		summary:
			'El Centro Cultural de San Marcos, en colaboración con la Dirección de Cine y Producción Audiovisual presentan el «Ciclo de cine peruano restaurado» busca visibilizar la importancia de la preservación y restauración del patrimonio cinematográfico nacional.',
	},
	{
		slug: 'noticia',
		url:
			'https://centroculturaldesanmarcos.wordpress.com/wp-content/uploads/2024/11/fotografias-para-post-de-ig-1790259093-e1732726928237.jpeg',
		date: '2024-11-15',
		dateString: 'Jueves, 15 de noviembre',
		title: 'La Dirección de Cine y Producción Audiovisual celebra los 29 años del Centro Cultural de San Marcos con el conversatorio: «Del olvido al rescate: un archivo que resiste»',
		summary:
			'El Centro Cultural de San Marcos, en colaboración con la Dirección de Cine y Producción Audiovisual presentan el «Ciclo de cine peruano restaurado» busca visibilizar la importancia de la preservación y restauración del patrimonio cinematográfico nacional.',
	},
];

export default newsDataToHome;
