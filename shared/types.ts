import { IUser } from './../backend/models/userModel';
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

export interface Address {
  country: string;
  city: string;
  address: string;
  postalCode: number;
}

export type User = IUser;
