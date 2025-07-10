import { formOptions } from '@tanstack/react-form';

interface DefaultValues {
	dependencia: string[];
	modalidad: string[];
	tipo: string[];
	search?: string;
}

interface FormOptions {
	defaultValues: DefaultValues;
}

export const cursosYtalleresFormOpts = formOptions<FormOptions>({
	defaultValues: {
		dependencia: [] as string[],
		modalidad: [] as string[],
		tipo: [] as string[],
		search: '',
	},
});
