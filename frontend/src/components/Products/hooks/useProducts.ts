import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

// import type { Category, Product } from './../../../../../shared/types';
import { queryKeys } from '../../../react-query/constants';
import ProductService from '../../../services/ProductService';

export type SortOptions = 'default' | 'popularity' | 'new' | 'ASC' | 'DESC'; // Asc and Desc is for price

export function useProducts() {
  const [category, setCategory] = useState<string>();
  const [sortBy, setSortBy] = useState<SortOptions>('default');

  const productsQuery = useQuery([queryKeys.products, category, sortBy], () =>
    ProductService.getProducts({
      category,
      sortBy,
    })
  );

  return { productsQuery, category, setCategory, sortBy, setSortBy };
}
