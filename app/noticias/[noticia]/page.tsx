import NewsContent from './news-content';

export default async function Page({
	params,
}: {
	params: Promise<{ noticia: string }>
}) {
const { noticia } = await params

return (
	<NewsContent noticia={noticia} />
);
}