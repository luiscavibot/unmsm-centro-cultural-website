import EventContent from './event-content';

export default async function Page({
	params,
}: {
	params: Promise<{ evento: string }>;
}) {
	const { evento } = await params;

	return <EventContent evento={evento} />;
}
