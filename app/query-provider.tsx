'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function QueryProvider({ children }: { children: React.ReactNode }) {

	const [queryClient] = React.useState(
		() =>
			new QueryClient({
			defaultOptions: {
				queries: {
					staleTime: 60 * 1000, // 1 minuto
				},
			},
			})
		);

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
