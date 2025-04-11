import { Suspense } from 'react';
import CulturalAgendaPage from './agenda-list-content';

export default async function Page() {
	return (
		<Suspense>
			<CulturalAgendaPage />
		</Suspense>
	);
}
