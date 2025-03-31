import { useState, FC } from 'react';
import ArrowDropdownIcon from '@/ui/components/atoms/icons/arrow-dropdown-icon';
import PrimaryButton from '@/ui/components/atoms/buttons/primary-button';
import TertiaryButton from '@/ui/components/atoms/buttons/tertiary-button';
import Checkbox from '@/ui/components/atoms/inputs/checkbox';

interface CheckboxItem {
	id: number;
	label: string;
	checked: boolean;
}

interface NoticiaFilterProps {
	handleClose?: () => void
}

const NoticiaFilter: FC<NoticiaFilterProps> = ({ handleClose }) => {

	const [checkboxesDependencias, setCheckboxesDependencias] = useState<
			CheckboxItem[]
		>([
			{ id: 1, label: 'Todas (231)', checked: false },
			{ id: 2, label: 'Banda Universitaria de Música (24)', checked: false },
			{ id: 3, label: 'Ballet San Marcos (64)', checked: false },
			{ id: 4, label: 'Biblioteca España de las Artes (12)', checked: false },
			{
				id: 5,
				label: 'Centro Universitario de Folklore (5)',
				checked: false,
			},
			{
				id: 6,
				label: 'Dirección de Cine y Producción Audiovisual (16)',
				checked: false,
			},
			{ id: 7, label: 'Dirección de Música (14)', checked: false },
			{ id: 8, label: 'Dirección de Turismo (8)', checked: false },
			{
				id: 9,
				label: 'Museo de Arqueología y Antropología (13)',
				checked: false,
			},
			{ id: 10, label: 'Museo de Arte de San Marcos (5)', checked: false },
			{
				id: 11,
				label: 'Teatro Universitario de San Marcos (7)',
				checked: false,
			},
		]);
	
		const handleCheckboxChangeDependencias = (id: number, checked: boolean) => {
			setCheckboxesDependencias((prevState) =>
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
						Dependencias
					</span>
					<ArrowDropdownIcon />
				</div>
				<div className="flex flex-col gap-y-1">
					{checkboxesDependencias.map(
						(checkbox) => (
							<Checkbox
								key={checkbox.id}
								label={checkbox.label}
								checked={
									checkbox.checked
								}
								onChange={(e) =>
									handleCheckboxChangeDependencias(
										checkbox.id,
										e.target.checked
									)
								}
							/>
						)
					)}
				</div>
			</div>
			<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 my-6"></div>
			<div className="flex gap-x-4">
				<TertiaryButton
					label="Limpiar filtros"
					theme="light"
					type="on-click"
					onClick={() => {
						console.log('click');
					}}
				/>
				<PrimaryButton
					label="Aplicar"
					theme="light"
					type="on-click"
					onClick={() => {
						console.log('click');
					}}
				/>
			</div>
		</div>
	)
}

export default NoticiaFilter