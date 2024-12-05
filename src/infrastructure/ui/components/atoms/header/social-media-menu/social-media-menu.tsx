import FacebookIcon from '@/infrastructure/ui/components/atoms/icons/social/facebook-icon';
import InstagramIcon from '@/infrastructure/ui/components/atoms/icons/social/instagram-icon';
import TiktokIcon from '@/infrastructure/ui/components/atoms/icons/social/tiktok-icon';
import YoutubeIcon from '@/infrastructure/ui/components/atoms/icons/social/youtube-icon';

const SocialMediaMenu = () => {
	return (
		<div className="flex flex-row items-center justify-center gap-2">
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
	)
}

export default SocialMediaMenu;