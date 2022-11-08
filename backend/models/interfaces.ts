import mongoose, { Document } from 'mongoose';

export interface IReview extends Document {
  name: string;
  rating: number;
  comment: string;
  user: mongoose.Schema.Types.ObjectId;
}

export interface IProduct extends Document {
  user: mongoose.Schema.Types.ObjectId;
  title: string;
  price: number;
  intro: string;
  countInStock: number;
  categories: mongoose.Schema.Types.ObjectId[];
  tags: string[];
  description: string;
  info: {
    weight: string;
    dimentions: string;
    colors: string;
    material: string;
  };
  reviews: IReview[];
  rating: number;
  images: string[];
  numReviews: number;
}
