export interface StrapiPrincipalCoversResponse {
	data: Data;
	meta: Meta;
}

export interface Data {
	id: number;
	attributes: ResponseAttributes;
}

export interface ResponseAttributes {
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	imagenes: Imagenes;
}

export interface Imagenes {
	data: ImageData[];
}

export interface ImageData {
	id: number;
	attributes: Attributes;
}

export interface Attributes {
	url: string;
	alternativeText: string;
}

export interface Meta {}
