import {
	type BlocksContent,
} from "@strapi/blocks-react-renderer";

export interface CursosYTalleresResponse {
    data: CursosYTalleres[];
    meta: Meta;
}

export interface CursosYTalleres {
    id:                       number;
    documentId:               string;
    titulo:                   string;
    slug:                     string;
    tipo:                     string;
    dependencia:              string | null;
    modalidad:                string;
    // fechaInicio:              Date;
    // fechaCierreInscripciones: Date;
    fechaInicio:              string | null;
    fechaCierreInscripciones: string | null;
    fechaClases:              string | null;
    horarioClases:            string | null;
    lugar:                    string | null;
    descripcion:              BlocksContent;
    createdAt:                Date;
    updatedAt:                Date;
    publishedAt:              Date;
    resumen:                  string | null;
    imagen:                   Imagen;
}

export interface Imagen {
    id:                number;
    documentId:        string;
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
    publishedAt:       Date;
}

export interface Formats {
    large:     Large;
    small:     Large;
    medium:    Large;
    thumbnail: Large;
}

export interface Large {
    ext:         string;
    url:         string;
    hash:        string;
    mime:        string;
    name:        string;
    path:        null;
    size:        number;
    width:       number;
    height:      number;
    sizeInBytes: number;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
