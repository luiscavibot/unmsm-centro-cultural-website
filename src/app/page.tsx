import Hero from '../presentation/components/organisms/home/hero';
import Contact from '../presentation/components/organisms/home/contact';
import Events from '../presentation/components/organisms/home/events';
import CoursesAndWorkshops from '@/presentation/components/organisms/home/courses-and-workshops';
import News from '@/presentation/components/organisms/home/news';
import Museums from '@/presentation/components/organisms/home/museums';
import Exhibitions from '@/presentation/components/organisms/home/exhibitions';
import Library from '@/presentation/components/organisms/home/library';
import ArtisticDisciplines from '@/presentation/components/organisms/home/artistic-disciplines';

export default function Home() {
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
