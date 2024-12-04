'use client'

import React from "react";
import useBgTransition from "@/infrastructure/ui/components/organisms/shared/header/navigation-menu/hooks/use-bg-transition";
import FlyoutLink from "@/infrastructure/ui/components/atoms/header/flyout-link";
import menu from '@/infrastructure/ui/data/menu'
import FlyoutLinkContent from '@/infrastructure/ui/components/molecules/header/flyout-link-content'

const NavigationMenu = () => {

	const { bgClass } = useBgTransition();

	return (
		<div className={`flex justify-center px-[104px] transition-colors duration-[50ms] ${bgClass}`}>
			{
				menu.map((item, index) => {
					const submenu = item['sub-menu']
					return (
						<FlyoutLink href={item.url} key={index} FlyoutContent={submenu ? () => <FlyoutLinkContent submenu={submenu} /> : undefined}>
							{item.title}
						</FlyoutLink>
					)
				})
			}
		</div>
	);
};

export default NavigationMenu;