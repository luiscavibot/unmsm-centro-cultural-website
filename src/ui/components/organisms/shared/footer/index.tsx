// app/components/organisms/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FacebookIcon from '@/ui/components/atoms/icons/social/facebook-icon';
import InstagramIcon from '@/ui/components/atoms/icons/social/instagram-icon';
import TiktokIcon from '@/ui/components/atoms/icons/social/tiktok-icon';
import YoutubeIcon from '@/ui/components/atoms/icons/social/youtube-icon';
import BaselinePlaceIcon from '@/ui/components/atoms/icons/baseline-place-icon';
import PhoneIcon from '@/ui/components/atoms/icons/phone-icon';
import {
	FACEBOOK_URL,
	INSTAGRAM_URL,
	TIKTOK_URL,
	YOUTUBE_URL,
} from '@/ui/data/redes-sociales';

const Siguenos = () => (
	<>
		<p className="text-xs leading-[normal] font-semibold">Síguenos:</p>
		<div className="flex flex-row items-center gap-2 mt-2">
			<a
				className="p-1 rounded-[4px] bg-dark-gray-2"
				href={FACEBOOK_URL}
				rel="noreferrer noopener"
				target="_blank"
			>
				<FacebookIcon />
			</a>
			<a
				className="p-1 rounded-[4px] bg-dark-gray-2"
				href={INSTAGRAM_URL}
				rel="noreferrer noopener"
				target="_blank"
			>
				<InstagramIcon />
			</a>
			<a
				className="p-1 rounded-[4px] bg-dark-gray-2"
				href={TIKTOK_URL}
				rel="noreferrer noopener"
				target="_blank"
			>
				<TiktokIcon />
			</a>
			<a
				className="p-1 rounded-[4px] bg-dark-gray-2"
				href={YOUTUBE_URL}
				rel="noreferrer noopener"
				target="_blank"
			>
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
					<Link className="max-w-[377px] flex gap-x-6" href="/">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/logo_unmsm_blanco_9cb954ac16.svg"
							alt="logo"
							width={54}
							height={75}
						/>
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/logo-ccsm.svg"
							alt="logo"
							width={299}
							height={75}
						/>
					</Link>
					<div className="hidden lg:block mt-6">
						<Siguenos />
					</div>
				</div>
				<div className="max-w-[365px]">
					<address className="space-y-4 text-xs lg:text-sm not-italic">
						<p className="flex items-baseline gap-2">
							<BaselinePlaceIcon
								className="shrink-0 relative top-1"
								ariaLabel="Ubicación"
								color="white"
							/>
							<span>
								Parque Universitario, Av. Nicolás de Piérola 1222, Cercado de Lima 15001
							</span>
						</p>
						<p className="flex items-baseline gap-2">
							<PhoneIcon
								className="shrink-0 relative top-1"
								ariaLabel="Teléfono"
								color="white"
							/>
							<span>(01) 6197000</span>
						</p>
						{/* <p className="flex items-baseline gap-2">
							<BaselineEmailIcon className="shrink-0 relative top-1" ariaLabel="Correo electrónico" color="white" />
							<span>correo.ccsm@unmsm.edu.pe</span>
						</p> */}
					</address>
				</div>
				<div className="max-w-[386px] leading-[16.8px] flex flex-col gap-y-8">
					<a
						className="link"
						href="https://reclamos.servicios.gob.pe/?institution_id=278"
						target="_blank"
						rel="noreferrer noopener"
					>
						Libro de reclamaciones
					</a>
					<a
						className="link"
						href="https://viceacademico.unmsm.edu.pe/wp-content/uploads/2023/03/003706-2023-R-Reglamento-de-Prevenci%C3%B3n-y-Sanci%C3%B3n-del-Hostigamiento-Sexual_UNMSM.pdf"
						target="_blank"
						rel="noreferrer noopener"
					>
						Reglamento de prevención y sanción del hostigamiento sexual de la UNMSM.
					</a>
				</div>
				<div className="my-10 w-[72px] mx-auto bg-light-gray-2 h-[1px] lg:hidden opacity-50"></div>
				<div className="block lg:hidden max-lg:mx-auto">
					<Siguenos />
				</div>
			</div>
		</div>
		<div className="bg-black-custom flex px-16 py-1 items-center justify-center">
			<small className="leading-[15px] text-[10px] font-light">
				2024 | All Right Reserved. Centro Cultural de San Marcos
			</small>
		</div>
	</footer>
);

export default Footer;
