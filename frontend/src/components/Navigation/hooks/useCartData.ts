import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import { cartSelector } from '../../../features/cart/cartSlice';
import { queryKeys } from '../../../react-query/constants';
import ProductService from '../../../services/ProductService';

/**
 * This Hook is responsible for getting the cart data
 */
export default function useCartData(keepPreviousData: boolean = true) {
  const { items } = useSelector(cartSelector);

  const cartDataQuery = useQuery(
    [queryKeys.cart, items],
    () => ProductService.getProductsByIds(items),
    {
      keepPreviousData,
    }
  );

  const totalPrice = cartDataQuery.data?.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return { cartDataQuery, totalPrice };
}
