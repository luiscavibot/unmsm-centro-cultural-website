import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'unmsm-static-files-v2.s3.us-east-2.amazonaws.com',
			},
			{
				protocol: 'https',
				hostname: 'ccsm.unmsm.edu.pe',
			},
			{
				protocol: 'https',
				hostname: 'centroculturaldesanmarcos.wordpress.com',
			},
			{
				protocol: 'https',
				hostname: 'i3.ytimg.com',
			},
		],
	},
};

export default nextConfig;
