import mongoose from 'mongoose';

export interface Id {
  _id: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  user: mongoose.Schema.Types.ObjectId;
}

export interface Product {
  _id?: string;
  user: mongoose.Schema.Types.ObjectId | string;
  title: string;
  price: number;
  intro: string;
  countInStock: number;
  categories: mongoose.Schema.Types.ObjectId[] | string[];
  tags: string[];
  description: string;
  info: {
    weight: string;
    dimentions: string;
    colors: string;
    material: string;
  };
  reviews: Review[];
  rating: number;
  images: string[];
  numReviews: number;
}

export interface Address {
  country: string;
  city: string;
  address: string;
  postalCode: number;
}

export interface User {
  email: string;
  password: string;
  username: string;
  address?: Address;
  firstName?: string;
  lastName?: string;
  isAdmin?: boolean;
  token?: string;
}
