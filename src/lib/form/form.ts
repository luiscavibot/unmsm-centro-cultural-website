import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from './form-context';
import Checkbox from '@/ui/components/atoms/inputs/checkbox';
import { CheckboxGroupField } from '@/ui/components/organisms/agenda-cultural/form/CheckboxGroupField';
import { CalendarField } from '@/ui/components/organisms/agenda-cultural/form/CalendarField';

export const { useAppForm, withForm } = createFormHook({
	fieldContext,
	formContext,
	fieldComponents: {
		Checkbox,
		CheckboxGroupField,
		CalendarField,
	},
	formComponents: {},
});
