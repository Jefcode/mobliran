import { axiosInstance } from '../axiosInstance';
import { User } from '../../../shared/types';

export interface LoginUserData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterUserData extends LoginUserData {
  username: string;
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
}

export default new AuthService();
