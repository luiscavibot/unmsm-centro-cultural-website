import {
	type BlocksContent,
} from "@strapi/blocks-react-renderer";

export interface NoticiasResponse {
	data: Noticias[]
	meta: Meta
  }
  
  export interface Noticias {
	id: number
	documentId: string
	titulo: string
	slug: string
	dependencia: string
	fechaPublicacion: string
	resumen: string | null
	descripcion: BlocksContent
	createdAt: string
	updatedAt: string
	publishedAt: string
	imagen: Imagen
  }
  
  export interface Small {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	sizeInBytes: number
  }
  
  export interface Thumbnail {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	sizeInBytes: number
  }
  
  export interface Imagen {
	id: number
	documentId: string
	name: string
	alternativeText: any
	caption: any
	width: number
	height: number
	formats: Formats2
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl: any
	provider: string
	provider_metadata: any
	createdAt: string
	updatedAt: string
	publishedAt: string
  }
  
  export interface Formats2 {
	large: Large
	small: Small2
	medium: Medium
	thumbnail: Thumbnail2
  }
  
  export interface Large {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	sizeInBytes: number
  }
  
  export interface Small2 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	sizeInBytes: number
  }
  
  export interface Medium {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	sizeInBytes: number
  }
  
  export interface Thumbnail2 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	sizeInBytes: number
  }
  
  export interface Meta {
	pagination: Pagination
  }
  
  export interface Pagination {
	page: number
	pageSize: number
	pageCount: number
	total: number
  }
  