import { Product } from '../../../shared/types';
import { axiosInstance } from '../axiosInstance';

class ProductService {
  // For when we need a query function for useQuery
  async getProducts(): Promise<Product[]> {
    const { data } = await axiosInstance.get('/products');
    return data;
  }

  async getProductDetail(id: string): Promise<Product> {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  }
}

export default new ProductService();
