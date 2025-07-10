import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from './form-context';
import Checkbox from '@/ui/components/atoms/inputs/checkbox';
import { CheckboxGroupField } from '@/ui/components/atoms/inputs-v2/CheckboxGroupField';
import { CalendarField } from '@/ui/components/atoms/inputs-v2/CalendarField';
import { SearchField } from '@/ui/components/atoms/inputs-v2/SearchField';

export const { useAppForm, withForm } = createFormHook({
	fieldContext,
	formContext,
	fieldComponents: {
		Checkbox,
		CheckboxGroupField,
		CalendarField,
		SearchField,
	},
	formComponents: {},
});
