import { formOptions } from '@tanstack/react-form';

interface DefaultValues {
	dependencia: string[];
	search: string;
}

interface FormOptions {
	defaultValues: DefaultValues;
}

export const noticiasFormOpts = formOptions<FormOptions>({
	defaultValues: {
		dependencia: [] as string[],
		search: '',
	},
});
