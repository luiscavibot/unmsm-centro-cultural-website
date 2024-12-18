interface CoursesAndWorkshopsDataToHome {
	slug: string;
	imageUrl: string;
	type: "Curso" | "Taller";
	title: string;
	subtitle: string;
	description: string;
}

const coursesAndWorkshopsDataToHome: CoursesAndWorkshopsDataToHome[] = [
	{
		slug: "curso-y-taller",
		type: "Taller",
		imageUrl: "https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/talleres.jpg",
		title: "Euphonio, tuba, trompeta y trombón 1",
		subtitle: "Dirección de Música UNMSM",
		description: "El presente programa pedagógico busca dotar al alumno de herramientas técnicas para la interpretación adecuada de los instrumentos de metales a través de recursos pedagógicos, técnicas de estudio, libros de estudio y exploración de repertorio universal propio del instrumento. ",
	},
	{
		slug: "curso-y-taller",
		type: "Curso",
		imageUrl: "https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/talleres.jpg",
		title: "Euphonio, tuba, trompeta y trombón 2",
		subtitle: "Dirección de Música UNMSM",
		description: "El presente programa pedagógico busca dotar al alumno de herramientas técnicas para la interpretación adecuada de los instrumentos de metales a través de recursos pedagógicos, técnicas de estudio, libros de estudio y exploración de repertorio universal propio del instrumento. ",
	},
	{
		slug: "curso-y-taller",
		type: "Taller",
		imageUrl: "https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/talleres.jpg",
		title: "Euphonio, tuba, trompeta y trombón 3",
		subtitle: "Dirección de Música UNMSM",
		description: "El presente programa pedagógico busca dotar al alumno de herramientas técnicas para la interpretación adecuada de los instrumentos de metales a través de recursos pedagógicos, técnicas de estudio, libros de estudio y exploración de repertorio universal propio del instrumento. ",
	},
];

export default coursesAndWorkshopsDataToHome;