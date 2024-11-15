// app/components/organisms/Header.tsx
import React from 'react';
import Image from 'next/image';
import NavigationLink from '@/presentation/components/molecules/navigation-link';

const Header: React.FC = () => (
	<header>
		<div className="py-4 px-[104px] gap-5 bg-gray">
			<div className="container flex items-center justify-between">
				<p>social</p>
				<Image
					src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/logo-ccsm.svg"
					alt="logo"
					width={162}
					height={40}
				/>
				<p>agenda</p>
			</div>
		</div>
		<nav className="px-[104px] gap-5 bg-dark-gray">
			<div className="container flex items-center justify-center space-x-4 text-sm font-semibold leading-[16.8px]">
				<NavigationLink href="/noticias">Noticias</NavigationLink>
				<NavigationLink href="/cursos-y-talleres">
					Cursos y Talleres
				</NavigationLink>
				<NavigationLink href="/biblioteca">Biblioteca</NavigationLink>
			</div>
		</nav>
	</header>
);

export default Header;
