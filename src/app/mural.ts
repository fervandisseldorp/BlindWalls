export interface Title {
  en: string;
  nl: string;
}

export interface Url {
  en: string;
  nl: string;
}

export interface Description {
  en: string;
  nl: string;
}

export interface Material {
  en: string;
  nl: string;
}

export interface Category {
  id: number;
  en: string;
  nl: string;
}

export interface Image {
  url: string;
  file: string;
  type: string;
}

export interface Mural {
  id: number;
  published: number;
  date: number;
  dateModified: number;
  authorID: number;
  latitude: number;
  longitude: number;
  address: string;
  numberOnMap: number;
  videoUrl: string;
  year: string;
  photographer: string;
  videoAuthor: string;
  author: string;
  rating: number;
  title: Title;
  url: Url;
  description: Description;
  material: Material;
  category: Category;
  images: Image[];
}
