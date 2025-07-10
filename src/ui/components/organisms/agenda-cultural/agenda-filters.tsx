import ArrowDropdownIcon from '@/ui/components/atoms/icons/arrow-dropdown-icon';
import { agendaCulturalFormOpts } from './form/form-opts';

import { modalidadOpts, organizadorOpts } from './form/input-values';
import { withForm } from '@/lib/form/form';

type AgendaFiltersProps = {
	handleClose?: () => void;
};

const AgendaFilters = withForm({
	...agendaCulturalFormOpts,
	props: {} as AgendaFiltersProps,
	render: function Render({ form }) {
		return (
			<div>
				<div className="max-md:hidden mb-8 max-md:flex-row max-md:gap-x-4">
					<form.AppField name="dateRange" mode="array">
						{(field) => <field.CalendarField className="grow" />}
					</form.AppField>
				</div>

				<div className="max-md:hidden">
					<div className="bg-white rounded-2xl p-6 ring-1 ring-inset ring-dark-white-3 text-dark-blue-2 max-w-[314px] w-full md:w-[270px] xl:w-[314px]">
						<div>
							<div className="flex items-center justify-between h-6 mb-2">
								<span className="font-bold leading-[19.2px]">
									Modalidad
								</span>
								<ArrowDropdownIcon />
							</div>
							<div className="flex flex-col gap-y-1">
								<form.AppField name="modalidad" mode="array">
									{(field) => (
										<field.CheckboxGroupField
											options={modalidadOpts}
										/>
									)}
								</form.AppField>
							</div>
						</div>

						<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 my-6" />

						<div>
							<div className="flex items-center justify-between h-6 mb-2">
								<span className="font-bold leading-[19.2px]">
									Organizador
								</span>
								<ArrowDropdownIcon />
							</div>
							<div className="flex flex-col gap-y-1">
								<form.AppField name="organizador" mode="array">
									{(field) => (
										<field.CheckboxGroupField
											options={organizadorOpts}
										/>
									)}
								</form.AppField>
							</div>
						</div>

						<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 my-6" />

						{/* Botones */}
						{/* <div className="flex gap-x-4">
              <TertiaryButton
                label="Limpiar filtros"
                theme="light"
                type="on-click"
                onClick={handleClose}
              />
              <PrimaryButton
                label="Aplicar"
                theme="light"
                type="on-click"
                onClick={handleClose}
              />
            </div> */}
					</div>
				</div>
			</div>
		);
	},
});

export default AgendaFilters;
