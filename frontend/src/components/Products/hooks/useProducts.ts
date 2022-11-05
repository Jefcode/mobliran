import { useQuery } from '@tanstack/react-query';

import { axiosInstance } from './../../../axiosInstance/index';
import type { Product } from './../../../../../shared/types';
import { queryKeys } from '../../../react-query/constants';

// For when we need a query function for useQuery
async function getProducts(): Promise<Product[]> {
  const { data } = await axiosInstance.get('/products');
  return data;
}

export function useProducts() {
  const fallback: Product[] = [];

  const {
    data = fallback,
    isLoading,
    isError,
  } = useQuery([queryKeys.products], getProducts);

  return { products: data, isLoading, isError };
}
