export class Mural {
    id: number;
    published: number;
    date: number;
    dataModified: number;
    authorID: number;
    latitude: number;
    longitude: number;
    address: string;
    numberOnMap: number;
    videoUrl: string;
    year: number;
    photographer: string;
    videoAuthor: string;
    author: string;
    rating: number;
    title: Title;
    url: Url;
    description: Description;
    material: Material;
    category: Category;
    images: Images[];
}

export class Title {
    en: string;
    nl: string;
}

export class Url {
    en: string;
    nl: string;
}

export class Description {
    en: string;
    nl: string;
}

export class Material {
    en: string;
    nl: string;
}

export class Category {
    id: number;
    en: string;
    nl: string;
}

export class Images {
    url: string;
    file: string;
    type: string;
}
