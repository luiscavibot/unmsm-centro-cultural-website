import Hero from '../presentation/components/organisms/home/hero';
import Contact from '../presentation/components/organisms/home/contact';
import Events from '../presentation/components/organisms/home/events';

export default function Home() {
	return (
		<>
			<h1 className="hidden sr-only">Centro Cultural de San Marcos</h1>
			<Hero />
			<Contact />
			<Events />
		</>
	);
}
