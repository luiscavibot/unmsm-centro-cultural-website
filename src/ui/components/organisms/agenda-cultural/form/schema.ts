import { z } from 'zod';

export const agendaCulturalSchema = z.object({
	date: z.object({
		from: z.date().nullable(),
		to: z.date().nullable(),
	}),
	modalidad: z.object({
		todos: z.boolean(),
		virtual: z.boolean(),
		presencial: z.boolean(),
		semipresencial: z.boolean(),
	}),
	organizador: z.object({
		todos: z.boolean(),
		bandaUniversitaria: z.boolean(),
		balletSanMarcos: z.boolean(),
		biblioteca: z.boolean(),
		centroUniversitario: z.boolean(),
		cine: z.boolean(),
		direccionMusica: z.boolean(),
		direccionTurismo: z.boolean(),
		museoArqueologia: z.boolean(),
		museoArte: z.boolean(),
		teatroUniversitario: z.boolean(),
	}),
});

export type AgendaCultural = z.infer<typeof agendaCulturalSchema>;
