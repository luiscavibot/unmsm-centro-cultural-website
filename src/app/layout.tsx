import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import { El_Messiri, Montserrat } from 'next/font/google'
import './globals.css';
import Footer from '@/presentation/components/organisms/footer';
import Header from '@/presentation/components/organisms/header';

const elMessiri = El_Messiri({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-el-messiri',
})

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
})

// const geistSans = localFont({
// 	src: './fonts/GeistVF.woff',
// 	variable: '--font-geist-sans',
// 	weight: '100 900',
// });
// const geistMono = localFont({
// 	src: './fonts/GeistMonoVF.woff',
// 	variable: '--font-geist-mono',
// 	weight: '100 900',
// });

export const metadata: Metadata = {
	title: 'Centro Cultural de San Marcos',
	description: 'Página de inicio del Centro Cultural de San Marcos',
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
				<div className="flex flex-col min-h-screen">
					<Header />
					<main>
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
