interface TextContent {
	text: string;
	type: string;
	bold?: boolean;
}

interface Paragraph {
	type: 'paragraph' | 'heading' | 'image';
	level?: number;
	children: TextContent[];
	image?: Image;
}

interface EventDate {
	id: number;
	day: string;
	start_time?: string;
	final_time?: string;
}

interface ImageFormat {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: string | null;
	size: number;
	width: number;
	height: number;
	sizeInBytes: number;
}

interface Image {
	id: number;
	documentId: string;
	name: string;
	alternativeText: string | null;
	caption: string | null;
	width: number;
	height: number;
	formats: {
		large?: ImageFormat;
		small?: ImageFormat;
		medium?: ImageFormat;
		thumbnail?: ImageFormat;
	};
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: any | null;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

export interface AngendaCultural {
	id: number;
	documentId: string;
	slug: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	title: string;
	isInDesktop: boolean;
	order: number;
	mode: string;
	organizer: string;
	place: string;
	description: Paragraph[];
	exact_dates: EventDate[];
	date_ranges: { id: number }[];
	image: Image;
	summary: string;
}

interface Pagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}

interface Meta {
	pagination: Pagination;
}

export interface AngendaCulturalResponse {
	data: AngendaCultural[];
	meta: Meta;
}
