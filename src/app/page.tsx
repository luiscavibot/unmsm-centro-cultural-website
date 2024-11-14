import Hero from "./sections/hero";
import Contact from "./sections/contact";
import Events from "./sections/events";

export default function Home() {
	return (
		<>
			<h1 className="hidden sr-only">
				Centro Cultural de San Marcos
			</h1>
			<Hero />
			<Contact />
			<Events />
		</>
	);
}
