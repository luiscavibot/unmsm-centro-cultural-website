'use client';

import React from 'react';
import useBgTransition from '@/ui/components/organisms/shared/header/navigation-menu/hooks/use-bg-transition';
import FlyoutLink from '@/ui/components/atoms/header/flyout-link';
import menu from '@/ui/data/menu';
import FlyoutLinkContent from '@/ui/components/molecules/header/flyout-link-content';
import Image from 'next/image';
import SocialMediaMenu from '@/ui/components/atoms/header/social-media-menu';
import ButtonInMenu from '@/ui/components/atoms/header/button-in-menu';

interface NavigationMenuProps {
	openMenu: boolean;
	setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
	openMenu,
	setOpenMenu,
}) => {
	const { bgClass } = useBgTransition();

	return (
		<div
			className={`max-lg:fixed max-lg:overflow-auto max-lg:top-0 max-lg:h-lvh max-lg:min-h-full max-lg:w-dvw max-lg:pt-6 max-lg:pb-8 px-4 lg:px-[104px] max-lg:bg-dark-gray lg:transition-colors lg:duration-[50ms] max-lg:transition-transform max-lg:duration-300 ease-out ${bgClass} ${
				openMenu ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'
			}`}
		>
			<div>
				<div className="flex lg:hidden justify-between items-center mb-6">
					<div className="text-xl leading-[20px] font-semibold text-white">
						Menú
					</div>
					<button
						className="block lg:hidden"
						onClick={() => setOpenMenu(false)}
					>
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/close.svg"
							alt="menu"
							width={32}
							height={32}
						/>
					</button>
				</div>
				<div className={`flex flex-col lg:flex-row justify-center`}>
					{menu.map((item, index) => {
						const submenu = item['sub-menu'];
						return (
							<FlyoutLink
								href={item.url}
								key={index}
								FlyoutContent={
									submenu
										? () => (
												<FlyoutLinkContent
													submenu={submenu}
												/>
										  )
										: undefined
								}
							>
								{item.title}
							</FlyoutLink>
						);
					})}
				</div>
				<div className="block lg:hidden mb-[30px]">
					<ButtonInMenu />
				</div>
				<div className="block lg:hidden">
					<SocialMediaMenu />
				</div>
			</div>
		</div>
	);
};

export default NavigationMenu;
