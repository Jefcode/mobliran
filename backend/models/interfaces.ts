import { Review, Product } from './../../shared/types';
import { Document } from 'mongoose';

export type IReview = Review & Document;
export type IProduct = Product & Document;
