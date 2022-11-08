import { IUser } from './../backend/models/userModel';
import { IProduct } from '../backend/models/interfaces';

export interface Id {
  _id: string;
}

export interface Review {}

export type Product = Id & IProduct;

export interface Address {
  country: string;
  city: string;
  address: string;
  postalCode: number;
}

export type User = Id & IUser;
