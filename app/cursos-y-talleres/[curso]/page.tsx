import CourseAndWorkshopContent from './course-and-workshop-content';

export default async function Page({
	params,
}: {
	params: Promise<{ curso: string }>
}) {
const { curso } = await params

return (
	<CourseAndWorkshopContent curso={curso} />
);
}