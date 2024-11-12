import React from 'react';
import Link from 'next/link';

interface NavigationLinkProps {
	href: string;
	children: React.ReactNode;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ href, children }) => (
	<Link href={href} className="text-white hover:text-gray-200 px-3 py-2">
		{children}
	</Link>
);

export default NavigationLink;
