'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface ReactQueryProviderProps {
	children: ReactNode;
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5, // 5 minutes
			refetchOnWindowFocus: false,
		},
	},
});
export function ReactQueryProvider({ children }: ReactQueryProviderProps) {
	return (
		<QueryClientProvider client={queryClient}>
			{children}

			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
