import { formOptions } from '@tanstack/react-form';

interface DefaultValues {
	dependencia: string[];
	search: string;
}

const defaultValues: DefaultValues = {
	dependencia: [],
	search: '',
};

export const noticiasFormOpts = formOptions({
	defaultValues,
});
