import { useState, FC } from 'react';
import ArrowDropdownIcon from '@/ui/components/atoms/icons/arrow-dropdown-icon';
import PrimaryButton from '@/ui/components/atoms/buttons/primary-button';
import TertiaryButton from '@/ui/components/atoms/buttons/tertiary-button';
import Checkbox from '@/ui/components/atoms/inputs/checkbox';
import { agendaCulturalOpts } from './form/default-values';
import { withForm } from '@/lib/form/form';

const organizadorOpts = [
	'Todos',
	'Banda Universitaria de Música',
	'Ballet San Marcos',
	'Biblioteca España de las Artes',
	'Centro Universitario de Folklore',
	'Dirección de Cine y Producción Audiovisual',
	'Dirección de Música',
	'Dirección de Turismo',
	'Museo de Arqueología y Antropología',
	'Museo de Arte de San Marcos',
	'Teatro Universitario de San Marcos',
];
const modalidadOpts = ['Todos', 'Virtual', 'Presencial', 'Semipresencial'];

interface CheckboxItem {
	id: number;
	label: string;
	checked: boolean;
}

type AgendaFilterProps = {
	handleClose?: () => void;
};

const AgendaFilter = withForm({
	...agendaCulturalOpts,
	props: {
		handleClose: () => {},
	} as AgendaFilterProps,
	render: ({ form, handleClose }) => {
		const [checkboxesModalidad, setCheckboxesModalidad] = useState<
			CheckboxItem[]
		>([
			{ id: 1, label: 'Todos', checked: false },
			{ id: 2, label: 'Virtual', checked: false },
			{ id: 3, label: 'Presencial', checked: false },
			{ id: 4, label: 'Semipresencial', checked: false },
		]);

		const [checkboxesOrganizador, setCheckboxesOrganizador] = useState<
			CheckboxItem[]
		>([
			{ id: 1, label: 'Todos', checked: false },
			{
				id: 2,
				label: 'Banda Universitaria de Música',
				checked: false,
			},
			{ id: 3, label: 'Ballet San Marcos', checked: false },
			{
				id: 4,
				label: 'Biblioteca España de las Artes',
				checked: false,
			},
			{
				id: 5,
				label: 'Centro Universitario de Folklore',
				checked: false,
			},
			{
				id: 6,
				label: 'Dirección de Cine y Producción Audiovisual',
				checked: false,
			},
			{ id: 7, label: 'Dirección de Música', checked: false },
			{ id: 8, label: 'Dirección de Turismo', checked: false },
			{
				id: 9,
				label: 'Museo de Arqueología y Antropología',
				checked: false,
			},
			{
				id: 10,
				label: 'Museo de Arte de San Marcos',
				checked: false,
			},
			{
				id: 11,
				label: 'Teatro Universitario de San Marcos',
				checked: false,
			},
		]);

		const handleCheckboxChangeModalidad = (
			id: number,
			checked: boolean
		) => {
			setCheckboxesModalidad((prevState) =>
				prevState.map((checkbox) =>
					checkbox.id === id ? { ...checkbox, checked } : checkbox
				)
			);
		};

		const handleCheckboxChangeOrganizador = (
			id: number,
			checked: boolean
		) => {
			setCheckboxesOrganizador((prevState) =>
				prevState.map((checkbox) =>
					checkbox.id === id ? { ...checkbox, checked } : checkbox
				)
			);
		};

		return (
			<div className="bg-white rounded-2xl p-6 ring-1 ring-inset ring-dark-white-3 text-dark-blue-2 max-w-[314px] w-full md:w-[270px] xl:w-[314px]">
				<div>
					<div className="flex items-center justify-between h-6 mb-2">
						<span className="font-bold leading-[19.2px]">
							Modalidad
						</span>
						<ArrowDropdownIcon />
					</div>
					<div className="flex flex-col gap-y-1">
						<form.AppField
							name="modalidad"
							mode="array"
							children={(field) => (
								<field.CheckboxGroupField
									options={modalidadOpts}
								/>
							)}
						/>
					</div>
				</div>
				<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 my-6"></div>
				<div>
					<div className="flex items-center justify-between h-6 mb-2">
						<span className="font-bold leading-[19.2px]">
							Organizador
						</span>
						<ArrowDropdownIcon />
					</div>
					<div>
						<div className="flex flex-col gap-y-1">
							<form.AppField
								name="organizador"
								mode="array"
								children={(field) => (
									<field.CheckboxGroupField
										options={organizadorOpts}
									/>
								)}
							/>
						</div>
					</div>
				</div>
				<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 my-6"></div>
				<div className="flex gap-x-4">
					<TertiaryButton
						label="Limpiar filtros"
						theme="light"
						type="on-click"
						onClick={() => {
							handleClose?.();
							console.log('click');
						}}
					/>
					<PrimaryButton
						label="Aplicar"
						theme="light"
						type="on-click"
						onClick={() => {
							handleClose?.();
							console.log('click');
						}}
					/>
				</div>
			</div>
		);
	},
});

export default AgendaFilter;
