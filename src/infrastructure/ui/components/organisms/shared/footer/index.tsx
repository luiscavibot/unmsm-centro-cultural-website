// app/components/organisms/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FacebookIcon from '@/infrastructure/ui/components/atoms/icons/social/facebook-icon';
import InstagramIcon from '@/infrastructure/ui/components/atoms/icons/social/instagram-icon';
import TiktokIcon from '@/infrastructure/ui/components/atoms/icons/social/tiktok-icon';
import YoutubeIcon from '@/infrastructure/ui/components/atoms/icons/social/youtube-icon';
import BaselinePlaceIcon from '@/infrastructure/ui/components/atoms/icons/baseline-place-icon';
import PhoneIcon from '@/infrastructure/ui/components/atoms/icons/phone-icon';
import BaselineEmailIcon from '@/infrastructure/ui/components/atoms/icons/baseline-email-icon';

const Siguenos = () => (
	<>
		<p className="mt-6 text-xs leading-[normal] font-semibold">Síguenos:</p>
		<div className="flex flex-row items-center gap-2 mt-2">
			<a className="p-1 rounded-[4px] bg-dark-gray-2" href="" rel="noreferrer noopener" target="_blank">
				<FacebookIcon />
			</a>
			<a className="p-1 rounded-[4px] bg-dark-gray-2" href="" rel="noreferrer noopener" target="_blank">
				<InstagramIcon />
			</a>
			<a className="p-1 rounded-[4px] bg-dark-gray-2" href="" rel="noreferrer noopener" target="_blank">
				<TiktokIcon />
			</a>
			<a className="p-1 rounded-[4px] bg-dark-gray-2" href="" rel="noreferrer noopener" target="_blank">
				<YoutubeIcon />
			</a>
		</div>
	</>
);

const Footer: React.FC = () => (
	<footer className="bg-dark-gray text-white">
		<div className="px-8 lg:px-[104px] container py-12 lg:py-[120px] ">
			<div className="flex flex-col lg:flex-row justify-between items-start">
				<div className="max-lg:mb-10">
					<Link className="max-w-[299px] block" href="/">
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/logo-ccsm.svg"
							alt="logo"
							width={299}
							height={74.8}
						/>
					</Link>
					<div className="hidden lg:block">
						<Siguenos />
					</div>
				</div>
				<div className="max-w-[386px] leading-[16.8px] flex flex-col gap-y-8">
					<div>
						<p className="text-[15px] lg:text-base font-bold">Ubicación:</p>
						<p className="text-sm lg:text-base">
							Av. Nicolás de Piérola #1222
							<br />
							Parque Universitario, Centro Histórico de Lima
						</p>
					</div>
					<address className="space-y-4 text-xs lg:text-sm not-italic">
						<p className="flex items-baseline gap-2">
							<BaselinePlaceIcon className="shrink-0 relative top-1" ariaLabel="Ubicación" color="white" />
							<span>Parque Universitario, de, Av. Nicolás de Piérola 1222, Cercado de Lima 15001</span>
						</p>
						<p className="flex items-baseline gap-2">
							<PhoneIcon className="shrink-0 relative top-1" ariaLabel="Teléfono" color="white" />
							<span>(01) 6197000</span>
						</p>
						<p className="flex items-baseline gap-2">
							<BaselineEmailIcon className="shrink-0 relative top-1" ariaLabel="Correo electrónico" color="white" />
							<span>correo.ccsm@unmsm.edu.pe</span>
						</p>
					</address>
				</div>
				<div className="block lg:hidden max-lg:mt-20 max-lg:mx-auto">
					<Siguenos />
				</div>
			</div>
		</div>
		<div className="bg-black-custom flex px-16 py-1 items-center justify-center">
			<small className="leading-[15px] text-[10px] font-light">2024 | All Right Reserved. Centro Cultural de San Marcos</small>
		</div>
	</footer>
);

export default Footer;
