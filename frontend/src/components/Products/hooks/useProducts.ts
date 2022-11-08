import { useQuery } from '@tanstack/react-query';

import type { Product } from './../../../../../shared/types';
import { queryKeys } from '../../../react-query/constants';
import ProductService from '../../../services/ProductService';

export function useProducts() {
  const fallback: Product[] = [];

  const {
    data = fallback,
    isLoading,
    isError,
  } = useQuery([queryKeys.products], ProductService.getProducts);

  return { products: data, isLoading, isError };
}
