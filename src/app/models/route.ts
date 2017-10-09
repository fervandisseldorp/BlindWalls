export interface Name {
  en: string;
  nl: string;
}

export interface Point {
  id: number;
  muralId: number;
  order: number;
}

export interface Route {
  id: number;
  time: string;
  distance: string;
  type: string;
  name: Name;
  points: Point[];
}
