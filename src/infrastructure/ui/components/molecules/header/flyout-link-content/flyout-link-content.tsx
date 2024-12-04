import Link from 'next/link'
import React, { FC } from 'react'
import { LinkMenu } from '@/infrastructure/ui/interfaces/menu'

interface FlyoutLinkContentProps {
	submenu: LinkMenu[];
}

const FlyoutLinkContent: FC<FlyoutLinkContentProps> = ({ submenu }) => {
	return (
		<div className="w-[204px] text-white py-2 shadow-xl font-medium rounded-lg overflow-hidden bg-dark-gray">
			{
				submenu.map((item, index) => {
					return (
						<Link href={item.url} key={index} className="flex items-center p-4 h-[48px] leading-[16.8px] text-sm hover:bg-gray transition-colors duration-300">
							{item.title}
						</Link>
					)
				})
			}
		</div>
	)
}

export default FlyoutLinkContent