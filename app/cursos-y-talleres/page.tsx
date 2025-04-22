import { Suspense } from 'react';
import CursosYTalleresPage from './courses-list-content';

export default async function Page() {
return (
	<Suspense>
		<CursosYTalleresPage />
	</Suspense>
);
}