import { useCallback, useMemo, useState } from 'react';
import { BsGift } from 'react-icons/bs';
import { HiArrowRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { CartItem } from '../../../../shared/types';
import useCart from '../../hooks/useCart';
import { ResultCartItem } from '../../models/types';
import Spinner from '../common/Spinner';
import CartItemRow from './CartItemRow';

interface CartDetailProps {
  cartItems: ResultCartItem[];
  total: number;
}

const CartDetail = ({ cartItems, total }: CartDetailProps) => {
  const [shouldUpdateCart, setShouldUpdateCart] = useState(false);
  const toUpdateData: CartItem[] = useMemo(() => [], []);

  const {
    removeFromCartMutation: { isLoading: loadingRemove },
    updateCartMutation: { isLoading: loadingUpdate },
    removeFromCart,
    updateCart,
  } = useCart();
  const isLoading = loadingRemove || loadingUpdate;

  const deleteItemHandler = (id: string) => {
    removeFromCart(id, () => console.log('removed'));
  };

  // Gets called when any of row items change their quantity
  const changeQuantityHandler = useCallback(
    (id: string, qty: number) => {
      if (!shouldUpdateCart) setShouldUpdateCart(true);

      // Check if exists in toUpdateData
      const existingItemIndex = toUpdateData.findIndex((p) => p.product === id);
      const existingItem = toUpdateData[existingItemIndex];

      if (existingItem) {
        toUpdateData[existingItemIndex] = { product: id, quantity: qty };
      } else {
        toUpdateData.push({ product: id, quantity: qty });
      }
    },
    [shouldUpdateCart, toUpdateData]
  );

  const updateCartHandler = () => {
    if (!shouldUpdateCart) return;
    updateCart(toUpdateData);
  };

  return (
    <div className='container px-2 mx-auto my-24 relative'>
      {isLoading && (
        <div className='absolute top-0 right-0 h-full w-full bg-white/75 z-50 flex items-center justify-center'>
          <Spinner className='w-20 h-20' />
        </div>
      )}

      {/* Shopping Cart Flex Container => Cart Items / Cart Total */}
      <div className='flex flex-col items-start space-y-10 lg:flex-row lg:space-y-0'>
        {/* Shopping Cart Items */}
        <div className='w-full lg:w-2/3'>
          {/* Title */}
          <h3 className='mb-10 text-3xl'>سبد خرید شما</h3>

          {/* Items Table */}
          <table className='w-full'>
            <tbody className='divide-y divide-gray-200'>
              {cartItems.map((item) => (
                <CartItemRow
                  onRemove={deleteItemHandler}
                  onChangeQuantity={changeQuantityHandler}
                  key={item.product._id}
                  data={item}
                />
              ))}
            </tbody>
          </table>

          {/* Discount Code form */}
          <div className='flex flex-col sm:flex-row items-center border-y border-stone-200'>
            {/* Flex Container */}
            <form className='w-full sm:w-1/2 flex items-center px-4 py-5 space-s-3 bg-primaryGray'>
              {/* Icon */}
              <BsGift className='text-2xl sm:text-lg' />

              {/* Input */}
              <input
                type='text'
                className='w-full text-sm bg-transparent outline-none text-stone-400 placeholder:font-extralight'
                placeholder='کد تخفیف'
              />

              {/* Apply Cuppon */}
              <button className='outline-none whitespace-nowrap text-sm'>
                اعمال کد تخفیف
              </button>
            </form>

            <div className='w-full sm:w-1/2 text-center flex items-center justify-center py-5 sm:py-0'>
              <button
                className='disabled:text-lightGray text-stone-600'
                disabled={!shouldUpdateCart}
                onClick={updateCartHandler}
              >
                بروزرسانی سبد
              </button>
            </div>
          </div>

          {/* Go Back to Shop Link */}
          <Link
            to='/shop'
            className='flex items-center mt-10 font-light space-s-3 text-lightGray'
          >
            <HiArrowRight />
            <span>بازگشت به فروشگاه</span>
          </Link>
        </div>

        {/* Cart Info */}
        <div className='w-full p-0 lg:w-1/3 lg:pr-10'>
          {/* Container */}
          <div className='w-full py-10 bg-primaryGray px-7 pt-7'>
            {/* info Table */}
            <table className='w-full max-w-xs text-right'>
              <tbody>
                <tr>
                  <th className='w-20 text-stone-800'>مجموع</th>
                  <td className='py-2 font-light text-lightGray'>
                    {total.toLocaleString()} تومان
                  </td>
                </tr>
                <tr>
                  <th className='w-20 text-stone-800'>تخـفیف</th>
                  <td className='py-2 font-light text-lightGray'>0 تومان</td>
                </tr>
              </tbody>
            </table>

            {/* Divider */}
            <div className='w-full border-b border-stone-300 mt-7'></div>

            {/* Total */}
            <div className='flex items-center justify-between my-4'>
              <span className='font-bold'>مبلغ نهایی</span>
              <span className=''>{total.toLocaleString()} تومان</span>
            </div>

            {/* Checkout Button */}
            <Link
              to='/checkout'
              className='block w-full p-3 text-center text-white duration-200 bg-black hover:bg-black/70'
            >
              نهـــــایی کردن خریـــــــــــــد
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
