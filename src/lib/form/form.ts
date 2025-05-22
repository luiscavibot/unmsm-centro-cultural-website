import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from './form-context';
import TextField from '@/ui/components/organisms/agenda-cultural/inputs';
import Checkbox from '@/ui/components/atoms/inputs/checkbox';
import { CheckboxGroupField } from '@/ui/components/organisms/agenda-cultural/form/CheckboxGroupField';

// Importa aquí tus componentes pre–vinculados (Input, Select, Button, etc.)
// import { TextInput, NumberInput } from '@/ui/components/atoms';
// import { SubmitButton } from '@/ui/components/atoms';

export const { useAppForm, withForm } = createFormHook({
	fieldContext,
	formContext,
	fieldComponents: {
		Checkbox,
		CheckboxGroupField,
	},
	formComponents: {
		// SubmitButton, // <form.SubmitButton />
	},
});
