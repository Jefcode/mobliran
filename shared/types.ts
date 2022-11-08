import mongoose from 'mongoose';
import { IUser } from './../backend/models/userModel';

export interface Id {
  _id: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  user: mongoose.Schema.Types.ObjectId;
}

export interface Product extends Id {
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

export type User = Id & IUser;
