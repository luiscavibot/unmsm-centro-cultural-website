import Contact from '@/ui/components/organisms/home/contact';
import Events from '@/ui/components/organisms/home/events';
import CoursesAndWorkshops from '@/ui/components/organisms/home/courses-and-workshops';
import News from '@/ui/components/organisms/home/news';
import Museums from '@/ui/components/organisms/home/museums';
import Exhibitions from '@/ui/components/organisms/home/exhibitions';
import Library from '@/ui/components/organisms/home/library';
import ArtisticDirections from '@/ui/components/organisms/home/artistic-directions';
import Hero from '@/ui/components/organisms/home/hero';

import { PrincipalCoversService } from '@/services/principal-covers.service';

export default async function Home() {
	const principalCoversResp = await PrincipalCoversService.getAll();
	const principalCovers = principalCoversResp?.images || [];
	return (
		<>
			<h1 className="hidden sr-only">Centro Cultural de San Marcos</h1>
			<Hero images={principalCovers} />
			<Contact />
			<Events />
			<CoursesAndWorkshops />
			<News />
			<Museums />
			<Exhibitions />
			<Library />
			<ArtisticDirections />
		</>
	);
}

export const revalidate = 60;
