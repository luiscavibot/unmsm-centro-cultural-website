import Contact from '@/ui/components/organisms/home/contact';
import Events from '@/ui/components/organisms/home/events';
import CoursesAndWorkshops from '@/ui/components/organisms/home/courses-and-workshops';
import News from '@/ui/components/organisms/home/news';
import Museums from '@/ui/components/organisms/home/museums';
import Exhibitions from '@/ui/components/organisms/home/exhibitions';
import Library from '@/ui/components/organisms/home/library';
import ArtisticDirections from '@/ui/components/organisms/home/artistic-directions';
import Interviews from '@/ui/components/organisms/home/interviews';
import Hero from '@/ui/components/organisms/home/hero';

import { PrincipalCoversService } from '@/services/principal-covers.service';
import { AgendaCulturalService } from '@/services/agenda-cultural.service';
import { NoticiasService } from '@/services/noticias.service';
import { CursosYTalleresService } from '@/services/cursos-y-talleres.service';

export default async function Home() {
	const principalCoversResp = await PrincipalCoversService.getAll();
	const principalCovers = principalCoversResp?.images || [];

	const agendaCulturalResp = await AgendaCulturalService.getEntriesToHome();
	const agendaCultural = agendaCulturalResp || [];

	const cursosYTalleresResp = await CursosYTalleresService.getEntriesToHome();
	const cursosYTalleres = cursosYTalleresResp || [];

	const noticiasResp = await NoticiasService.getEntriesToHome();
	const noticias = noticiasResp || [];

	return (
		<div className="lg:-mt-[--header-bottom-height]">
			<h1 className="hidden sr-only">Centro Cultural de San Marcos</h1>
			<Hero images={principalCovers} />
			<Contact />
			<Events agendaCultural={agendaCultural} />
			<CoursesAndWorkshops cursosYTalleres={cursosYTalleres} />
			<News noticias={noticias} />
			<Museums />
			<Exhibitions />
			<Library />
			<ArtisticDirections />
			<Interviews />
		</div>
	);
}

export const revalidate = 60;
