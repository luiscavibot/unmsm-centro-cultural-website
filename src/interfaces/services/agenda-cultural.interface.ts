export type DescriptionBlock = ParagraphBlock | HeadingBlock | ImageBlock;

export interface BaseBlock {
	type: string;
	children: Child[];
}

export interface ParagraphBlock extends BaseBlock {
	type: 'paragraph';
}

export interface HeadingBlock extends BaseBlock {
	type: 'heading';
	level: number;
}

export interface ImageBlock extends BaseBlock {
	type: 'image';
	image: Image;
}

export interface Child {
	text: string;
	type: string;
	bold?: boolean;
}

// Interface para imágenes (utilizada en "image" y en bloques de tipo "image")
export interface Image {
	id?: number;
	documentId?: string;
	name: string;
	alternativeText?: string | null;
	caption?: string | null;
	width: number;
	height: number;
	formats: ImageFormats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl?: string | null;
	provider: string;
	createdAt?: string;
	updatedAt?: string;
	publishedAt?: string;
	provider_metadata?: any;
}

export interface ImageFormats {
	large?: ImageFormat;
	small?: ImageFormat;
	medium?: ImageFormat;
	thumbnail?: ImageFormat;
}

export interface ImageFormat {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: string | null;
	size: number;
	width: number;
	height: number;
	sizeInBytes?: number;
}

// Interfaces para fechas
export interface ExactDate {
	id: number;
	day: string;
	start_time: string | null;
	final_time: string | null;
}

export interface DateRange {
	id: number;
	start_date: ExactDate | null;
	final_date: ExactDate | null;
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
	description: DescriptionBlock[];
	summary: string;
	image: Image;
	exact_dates: ExactDate[] | null;
	date_ranges: DateRange[] | null;
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
