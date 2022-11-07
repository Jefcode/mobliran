import { axiosInstance } from '../axiosInstance';
import { Address, User } from '../../../shared/types';

export interface LoginUserData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterUserData extends LoginUserData {
  username: string;
}

export interface IUpdateUserAddress {
  token: string;
  address: Address;
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
}

export default new AuthService();
