export interface Id {
  _id: string;
}

export interface Review {}

export interface Product extends Id {
  title: string;
  price: number;
  intro: string;
  countInStock: number;
  categories: string[];
  tags: string[];
  description: string;
  info: {
    weight: string;
    dimentions: string;
    colors: string;
    material: string;
  };
  reviews: Review[];
  images: string[];
}

export interface Address {}

export interface NewUser {
  email: string;
  username: string;
  address?: Address;
  firstName?: string;
  lastName?: string;
  token?: string;
}

export type User = Id & NewUser;
