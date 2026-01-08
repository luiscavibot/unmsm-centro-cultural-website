import { formOptions } from '@tanstack/react-form';

interface DefaultValues {
	dependencia: string[];
	modalidad: string[];
	tipo: string[];
	search: string;
}

const defaultValues: DefaultValues = {
	dependencia: [],
	modalidad: [],
	tipo: [],
	search: '',
};

export const cursosYtalleresFormOpts = formOptions({
	defaultValues,
});
