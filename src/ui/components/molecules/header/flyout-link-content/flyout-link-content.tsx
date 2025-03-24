import Link from 'next/link';
import React, { FC } from 'react';
import { LinkMenu } from '@/ui/interfaces/menu';

interface FlyoutLinkContentProps {
	submenu: LinkMenu[];
	setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const FlyoutLinkContent: FC<FlyoutLinkContentProps> = ({ submenu , setOpenMenu}) => {
	return (
		<div className="w-full lg:w-[204px] text-white py-2 lg:shadow-xl font-medium lg:rounded-lg overflow-hidden bg-gray lg:bg-dark-gray">
			{submenu.map((item, index) => {
				return (
					<Link
						href={item.url || '#'}
						key={index}
						className="flex items-center p-4 h-[48px] leading-[16.8px] text-sm hover:bg-gray transition-colors duration-300"
						onClick={() => setOpenMenu(false)}
					>
						{item.title}
					</Link>
				);
			})}
		</div>
	);
};

export default FlyoutLinkContent;
