'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavigationMenu from '@/infrastructure/ui/components/organisms/shared/header/navigation-menu';
import SocialMediaMenu from '@/infrastructure/ui/components/atoms/header/social-media-menu';
import ButtonInMenu from '@/infrastructure/ui/components/atoms/header/button-in-menu';

const Header: React.FC = () => {

	const [openMenu, setOpenMenu] = useState<boolean>(false);

	useEffect(() => {
		if (openMenu) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}, [openMenu]);

	return (
		<header className="sticky top-0 z-50" >
			<div className="py-4 px-4 lg:px-[104px] gap-5 bg-gray">
				<div className="container flex items-center justify-between">
					<button className="block lg:hidden" onClick={() => setOpenMenu(true)}>
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/menu.svg"
							alt="menu"
							width={32}
							height={32}
						/>
					</button>
					<div className="hidden lg:block">
						<SocialMediaMenu />
					</div>
					<Link className="px-2" href="/" >
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/logo-ccsm.svg"
							alt="logo"
							width={162}
							height={40}
						/>
					</Link>
					<div className="hidden lg:block">
						<ButtonInMenu />
					</div>
				</div>
			</div>
			<NavigationMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
		</header >
	);

}

export default Header;
