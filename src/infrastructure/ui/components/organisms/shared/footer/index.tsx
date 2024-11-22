// app/components/organisms/Footer.tsx
import React from 'react';

const Footer: React.FC = () => (
	<footer className="bg-gray-800 text-white">
		<div className="container mx-auto p-4 text-center">
			<p>&copy; {new Date().getFullYear()} Mi Sitio Web</p>
		</div>
	</footer>
);

export default Footer;
