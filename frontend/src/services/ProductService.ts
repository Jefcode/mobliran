import { Product } from '../../../shared/types';
import { axiosInstance } from '../axiosInstance';

interface GetProductsArgs {
  category: string | undefined;
}

class ProductService {
  // For when we need a query function for useQuery
  async getProducts({ category }: GetProductsArgs): Promise<Product[]> {
    const { data } = await axiosInstance.get(
      `/products?category=${category === undefined ? 'all' : category}`
    );
    return data;
  }

  async getProductDetail(id: string): Promise<Product> {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  }
}

export default new ProductService();
