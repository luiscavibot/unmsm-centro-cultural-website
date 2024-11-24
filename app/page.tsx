import ArtisticDisciplines from '@/infrastructure/ui/components/organisms/home/artistic-disciplines';
import Contact from '@/infrastructure/ui/components/organisms/home/contact';
import CoursesAndWorkshops from '@/infrastructure/ui/components/organisms/home/courses-and-workshops';
import Events from '@/infrastructure/ui/components/organisms/home/events';
import Exhibitions from '@/infrastructure/ui/components/organisms/home/exhibitions';
import Hero from '@/infrastructure/ui/components/organisms/home/hero';
import Library from '@/infrastructure/ui/components/organisms/home/library';
import Museums from '@/infrastructure/ui/components/organisms/home/museums';
import News from '@/infrastructure/ui/components/organisms/home/news';
import { getInjection } from '../di/container';

export default async function Home() {
	const principalCoversController = getInjection(
		'IPrincipalCoversController'
	);

	const data = await principalCoversController.getAll();

	return (
		<>
			<h1 className="hidden sr-only">Centro Cultural de San Marcos</h1>
			<Hero />
			<Contact />
			<Events />
			<CoursesAndWorkshops />
			<News />
			<Museums />
			<Exhibitions />
			<Library />
			<ArtisticDisciplines />
		</>
	);
}
