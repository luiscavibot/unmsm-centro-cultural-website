import { Suspense } from 'react';
import NoticiasPage from './news-list-content';

export default async function Page() {
return (
	<Suspense>
		<NoticiasPage />
	</Suspense>
);
}