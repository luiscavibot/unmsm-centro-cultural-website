import { createContainer } from '@evyweb/ioctopus';
import { registerPrincipalCoversModule } from './modules/principal-covers.module';
import { DI_RETURN_TYPES, DI_SYMBOLS } from './types';

const ApplicationContainer = createContainer();

registerPrincipalCoversModule(ApplicationContainer);

export function getInjection<K extends keyof typeof DI_SYMBOLS>(
	symbol: K
): DI_RETURN_TYPES[K] {
	return ApplicationContainer.get(DI_SYMBOLS[symbol]);
}
