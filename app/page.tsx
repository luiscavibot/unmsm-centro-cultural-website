import Contact from '@/ui/components/organisms/home/contact';
import Events from '@/ui/components/organisms/home/events';
import CoursesAndWorkshops from '@/ui/components/organisms/home/courses-and-workshops';
import News from '@/ui/components/organisms/home/news';
import Museums from '@/ui/components/organisms/home/museums';
import Exhibitions from '@/ui/components/organisms/home/exhibitions';
import Library from '@/ui/components/organisms/home/library';
import ArtisticDirections from '@/ui/components/organisms/home/artistic-directions';

export default async function Home() {
	return (
		<>
			<h1 className="hidden sr-only">Centro Cultural de San Marcos</h1>
			{/* <Hero images={principalCovers} /> */}
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
