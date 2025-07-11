import ArrowDropdownIcon from '@/ui/components/atoms/icons/arrow-dropdown-icon';
import { noticiasFormOpts } from './form/form-opts';
import { withForm } from '@/lib/form/form';
import { dependenciaOpts } from './form/input-values';

type NoticiaFilterProps = {
	handleClose?: () => void;
};

const NoticiaFilter = withForm({
	...noticiasFormOpts,
	props: {} as NoticiaFilterProps,
	render: function Render({ form }) {
		return (
			<>
				<div>
					<form.AppField name="search">
						{(field) => (
							<field.SearchField
								className="mb-7"
								placeholder="Buscar por palabra clave"
							/>
						)}
					</form.AppField>
				</div>
				<div className="bg-white rounded-2xl p-6 ring-1 ring-inset ring-dark-white-3 text-dark-blue-2 max-w-[314px] w-full md:w-[270px] xl:w-[314px]">
					<div>
						<div className="flex items-center justify-between h-6 mb-2">
							<span className="font-bold leading-[19.2px]">
								Dependencias
							</span>
							<ArrowDropdownIcon />
						</div>
						<div className="flex flex-col gap-y-1">
							<form.AppField name="dependencia" mode="array">
								{(field) => (
									<field.CheckboxGroupField
										options={dependenciaOpts}
									/>
								)}
							</form.AppField>
						</div>
					</div>
					<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 my-6"></div>
					{/* <div className="flex gap-x-4">
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
			</div> */}
				</div>
			</>
		);
	},
});
export default NoticiaFilter;
