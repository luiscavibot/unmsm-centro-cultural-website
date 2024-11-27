// app/components/organisms/Header.tsx
import React from 'react';
import Image from 'next/image';
import NavigationLink from '@/infrastructure/ui/components/molecules/navigation-link';
import FacebookIcon from '@/infrastructure/ui/components/atoms/icons/social/facebook-icon';
import InstagramIcon from '@/infrastructure/ui/components/atoms/icons/social/instagram-icon';
import TiktokIcon from '@/infrastructure/ui/components/atoms/icons/social/tiktok-icon';
import YoutubeIcon from '@/infrastructure/ui/components/atoms/icons/social/youtube-icon';

const Header: React.FC = () => (
	<header>
		<div className="py-4 px-[104px] gap-5 bg-gray">
			<div className="container flex items-center justify-between">
				<div className="flex flex-row items-center gap-2">
					<a className="p-1" href="" rel="noreferrer noopener" target="_blank">
						<FacebookIcon />
					</a>
					<a className="p-1" href="" rel="noreferrer noopener" target="_blank">
						<InstagramIcon />
					</a>
					<a className="p-1" href="" rel="noreferrer noopener" target="_blank">
						<TiktokIcon />
					</a>
					<a className="p-1" href="" rel="noreferrer noopener" target="_blank">
						<YoutubeIcon />
					</a>
				</div>
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
				<NavigationLink href="/disciplinas-artisticas">Disciplinas artísticas</NavigationLink>
				<NavigationLink href="/museos">Museos</NavigationLink>
				<NavigationLink href="/visitanos">Visítanos</NavigationLink>
				<NavigationLink href="/biblioteca">Biblioteca</NavigationLink>
				<NavigationLink href="/nosotros">Nosotros</NavigationLink>
			</div>
		</nav>
	</header>
);

export default Header;
