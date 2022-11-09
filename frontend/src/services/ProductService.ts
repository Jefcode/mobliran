import { Product } from '../../../shared/types';
import { axiosInstance } from '../axiosInstance';

interface GetProductsArgs {
  category: string | undefined;
  sortBy: string;
}

class ProductService {
  // For when we need a query function for useQuery
  async getProducts({ category, sortBy }: GetProductsArgs): Promise<Product[]> {
    const { data } = await axiosInstance.get(
      `/products?category=${
        category === undefined ? 'all' : category
      }&sortBy=${sortBy}`
    );
    return data;
  }

  async getProductDetail(id: string): Promise<Product> {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  }
}

export default new ProductService();
