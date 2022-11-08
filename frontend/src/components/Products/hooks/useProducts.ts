import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import type { Category, Product } from './../../../../../shared/types';
import { queryKeys } from '../../../react-query/constants';
import ProductService from '../../../services/ProductService';

export function useProducts() {
  const [category, setCategory] = useState<Category>();

  const productsQuery = useQuery([queryKeys.products, category], () =>
    ProductService.getProducts({
      category,
    })
  );

  return { productsQuery, category, setCategory };
}
