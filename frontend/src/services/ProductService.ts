import { Product } from '../../../shared/types';
import { axiosInstance } from '../axiosInstance';
import { PriceRange } from '../components/Products/hooks/useProducts';

interface GetProductsArgs {
  category: string | undefined;
  sortBy: string;
  priceRange: PriceRange;
}

class ProductService {
  // For when we need a query function for useQuery
  async getProducts({
    category,
    sortBy,
    priceRange,
  }: GetProductsArgs): Promise<Product[]> {
    const { data } = await axiosInstance.get(
      `/products?category=${
        category === undefined ? 'all' : category
      }&sortBy=${sortBy}&minPrice=${priceRange.min}&maxPrice=${
        priceRange.max ?? ''
      }`
    );
    return data;
  }

  async getProductDetail(id: string): Promise<Product> {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  }
}

export default new ProductService();
