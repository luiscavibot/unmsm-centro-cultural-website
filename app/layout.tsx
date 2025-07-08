import type { Metadata } from 'next';
import { El_Messiri, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/ui/components/organisms/shared/header';
import Footer from '@/ui/components/organisms/shared/footer';
import QueryProvider from './query-provider';
import { GoogleAnalytics } from '@next/third-parties/google';

const elMessiri = El_Messiri({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-el-messiri',
});

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
});

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NODE_ENV === 'development'
		  ? 'http://localhost:3000'
		  : 'https://centrocultural.unmsm.edu.pe'
	),
	title: 'Centro Cultural de San Marcos',
	description: 'Página del Centro Cultural de San Marcos',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body
				className={`${elMessiri.variable} ${montserrat.variable} antialiased`}
			>
				<QueryProvider>
					<div className="flex flex-col min-h-screen">
						<Header />
						<meta name="robots" content="index, follow" />
						<main className="flex-grow">{children}</main>
						<Footer />
					</div>
				</QueryProvider>
			</body>
			<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
		</html>
	);
}
