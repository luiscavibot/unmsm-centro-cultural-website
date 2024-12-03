// app/components/organisms/Header.tsx
import React from 'react';
import Image from 'next/image';
import FacebookIcon from '@/infrastructure/ui/components/atoms/icons/social/facebook-icon';
import InstagramIcon from '@/infrastructure/ui/components/atoms/icons/social/instagram-icon';
import TiktokIcon from '@/infrastructure/ui/components/atoms/icons/social/tiktok-icon';
import YoutubeIcon from '@/infrastructure/ui/components/atoms/icons/social/youtube-icon';
import Link from 'next/link';
import CalendarHeaderIcon from '@/infrastructure/ui/components/atoms/icons/calendar-header-icon';
import NavigationMenu from '@/infrastructure/ui/components/organisms/shared/header/navigation-menu';

const Header: React.FC = () => (
	<header className="sticky top-0 z-50">
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
				<Link className="px-2" href="/">
					<Image
						src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/logo-ccsm.svg"
						alt="logo"
						width={162}
						height={40}
					/>
				</Link>
				<Link className="flex flex-row gap-2 items-center px-[12px] py-[13px] border-[1px] border-white rounded-lg" href="/agenda">
					<CalendarHeaderIcon />
					<span className="text-sm">Agenda cultural</span>
				</Link>
			</div>
		</div>
		<NavigationMenu />
	</header>
);

export default Header;
