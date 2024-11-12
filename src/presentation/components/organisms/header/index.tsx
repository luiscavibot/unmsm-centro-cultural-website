// app/components/organisms/Header.tsx
import React from 'react';
import NavigationLink from '../../molecules/navigation-link';

const Header: React.FC = () => (
	<header className="bg-gray-800">
		<nav className="container mx-auto flex items-center justify-between p-4">
			<div className="flex items-center space-x-4">
				<NavigationLink href="/">Inicio</NavigationLink>
				<NavigationLink href="/about">Acerca de</NavigationLink>
				<NavigationLink href="/contact">Contacto</NavigationLink>
			</div>
		</nav>
	</header>
);

export default Header;
