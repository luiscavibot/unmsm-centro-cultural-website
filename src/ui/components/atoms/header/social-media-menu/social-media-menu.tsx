import FacebookIcon from '@/ui/components/atoms/icons/social/facebook-icon';
import InstagramIcon from '@/ui/components/atoms/icons/social/instagram-icon';
import TiktokIcon from '@/ui/components/atoms/icons/social/tiktok-icon';
import YoutubeIcon from '@/ui/components/atoms/icons/social/youtube-icon';
import {
	FACEBOOK_URL,
	INSTAGRAM_URL,
	TIKTOK_URL,
	YOUTUBE_URL,
} from '@/ui/data/redes-sociales';

const SocialMediaMenu = () => {
	return (
		<div className="flex flex-row items-center justify-center gap-2">
			<a
				className="p-1"
				href={FACEBOOK_URL}
				rel="noreferrer noopener"
				target="_blank"
			>
				<FacebookIcon />
			</a>
			<a
				className="p-1"
				href={INSTAGRAM_URL}
				rel="noreferrer noopener"
				target="_blank"
			>
				<InstagramIcon />
			</a>
			<a
				className="p-1"
				href={TIKTOK_URL}
				rel="noreferrer noopener"
				target="_blank"
			>
				<TiktokIcon />
			</a>
			<a
				className="p-1"
				href={YOUTUBE_URL}
				rel="noreferrer noopener"
				target="_blank"
			>
				<YoutubeIcon />
			</a>
		</div>
	);
};

export default SocialMediaMenu;
