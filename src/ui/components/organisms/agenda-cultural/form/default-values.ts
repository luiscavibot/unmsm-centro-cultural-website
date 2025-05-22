// const agendaCulturalDefaultValues = {
// 	date: { from: null, to: null },
// 	modalidad: {
// 		todos: false,
// 		virtual: false,
// 		presencial: false,
// 		semipresencial: false,
// 	},
// 	organizador: {
// 		todos: false,
// 		bandaUniversitaria: false,
// 		balletSanMarcos: false,
// 		biblioteca: false,
// 		centroUniversitario: false,
// 		cine: false,
// 		direccionMusica: false,
// 		direccionTurismo: false,
// 		museoArqueologia: false,
// 		museoArte: false,
// 		teatroUniversitario: false,
// 	},
// };

import { formOptions } from '@tanstack/react-form';

// export default agendaCulturalDefaultValues;

export const agendaCulturalOpts = formOptions({
	defaultValues: {
		date: { from: null, to: null },
		modalidad: [] as string[],
		organizador: [] as string[],
	},
});
