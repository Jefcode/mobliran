import { axiosInstance, getJWTHeader } from '../axiosInstance';
import { Address, CartItem, User } from '../../../shared/types';
import { IProfileUpdateForm } from '../screens/Account/AccountDetails';

export interface LoginUserData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterUserData extends LoginUserData {
  username: string;
}

interface IUpdateUserAddress {
  token: string;
  address: Address;
}

interface IUpdateUserProfile {
  token: string;
  userData: IProfileUpdateForm;
}

interface IAddToCart {
  token: string;
  cartItem: CartItem;
}

interface IUpdateCart {
  token: string;
  cart: CartItem[];
}

class AuthService {
  // Login User Api request
  async loginUser(userData: LoginUserData): Promise<User> {
    const response = await axiosInstance.post('/users/login', userData);
    return response.data;
  }

  // Register User Api Request
  async registerUser(userData: RegisterUserData): Promise<User> {
    const response = await axiosInstance.post('/users', userData);
    return response.data;
  }

  // Get User Data
  async getUserData(token: string): Promise<User> {
    const response = await axiosInstance.get('/users/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  // update User Address
  async updateUserAddress({
    token,
    address,
  }: IUpdateUserAddress): Promise<User> {
    const response = await axiosInstance.put(
      '/users/profile/address',
      address,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }

  // Update user Profile
  async updateUserProfile({ token, userData }: IUpdateUserProfile) {
    const response = await axiosInstance.put('/users/profile', userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  // Add Product To Cart
  async addToCart({ token, cartItem }: IAddToCart): Promise<User> {
    const response = await axiosInstance.post(
      '/users/cart',
      cartItem,
      getJWTHeader(token)
    );
    return response.data;
  }

  async updateCart({ token, cart }: IUpdateCart): Promise<User> {
    const response = await axiosInstance.put(
      '/users/cart',
      { cart },
      getJWTHeader(token)
    );
    return response.data;
  }
}

export default new AuthService();
