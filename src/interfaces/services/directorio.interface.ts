export interface DirectorioResponse {
    data: Directorio;
    meta: object;
}

export interface Directorio {
    id:                   number;
    documentId:           string;
    createdAt:            Date;
    updatedAt:            Date;
    publishedAt:          Date;
    elementos_directorio: ElementosDirectorio[];
}

export interface ElementosDirectorio {
    id:      number;
    unidad:  null | string;
    cargo:   null | string;
    nombre:  null | string;
    anexo:   null | string;
    correos: Correo[];
}

export interface Correo {
    id:     number;
    correo: string;
}
