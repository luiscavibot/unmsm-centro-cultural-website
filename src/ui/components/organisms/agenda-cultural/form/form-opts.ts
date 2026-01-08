import { formOptions } from '@tanstack/react-form';

interface DefaultValues {
	dateRange: [string, string];
	modalidad: string[];
	organizador: string[];
}

const defaultValues: DefaultValues = {
	dateRange: ['', ''],
	modalidad: [],
	organizador: [],
};

export const agendaCulturalFormOpts = formOptions({
	defaultValues,
});
