import { CartItem, Product } from '../../../../shared/types';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import Message from '../common/Message';

import ProductItem from './ProductItem';
import SkeletonProducts from './SkeletonProducts';

interface ProductsProps {
  isLoading?: boolean;
  isError?: boolean;
  products: Product[];
}

const Products = ({
  products,
  isLoading = false,
  isError = false,
}: ProductsProps) => {
  // Add Item to Cart Prep
  const { addToCart } = useShoppingCartContext();

  // Add to cart (called in a child product)
  const addToCartHandler = (item: CartItem) => {
    addToCart(item);
  };

  return (
    <div className='flex flex-col items-start sm:flex-row sm:flex-wrap'>
      {isLoading && <SkeletonProducts />}
      {isError && (
        <div className='w-full px-5 py-4 bg-rose-200 border-rose-400 font-both'>
          خطایی رخ داده است
        </div>
      )}
      {products.length === 0 && !isLoading && (
        <div className='w-full px-6'>
          <Message variant='info'>
            هیچ محصولی با این دسته بندی یافت نشد.
          </Message>
        </div>
      )}
      {products.map((product) => (
        <ProductItem
          product={product}
          key={product._id}
          onAddToCart={addToCartHandler}
        />
      ))}
    </div>
  );
};

export default Products;
