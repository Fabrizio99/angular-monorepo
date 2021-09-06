export interface Message {
  message: string;
}

export interface BaseEntity {
  id: string | null;
}

export interface Book extends BaseEntity {
  name: string;
  author: string;
  year: number;
  image: string;
}