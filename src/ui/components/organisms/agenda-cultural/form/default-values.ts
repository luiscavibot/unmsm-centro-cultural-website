import { formOptions } from '@tanstack/react-form';

interface DefaultValues {
	dateRange: [string, string];
	modalidad: string[];
	organizador: string[];
}

interface FormOptions {
	defaultValues: DefaultValues;
}

export const agendaCulturalOpts = formOptions<FormOptions>({
	defaultValues: {
		dateRange: ['', ''],
		modalidad: [] as string[],
		organizador: [] as string[],
	},
});
