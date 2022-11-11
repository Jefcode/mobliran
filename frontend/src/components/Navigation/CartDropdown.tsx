import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { ResultCartItem } from '../../models/types';

import Spinner from '../common/Spinner';
import useCartData from './hooks/useCartData';

const CartDropdown = () => {
  const {
    cartDataQuery: { data = [], isLoading, isSuccess },
    totalPrice,
  } = useCartData();

  return (
    <div className='absolute left-0 z-50 invisible p-5 text-white transition-all bg-black opacity-0 w-60 group-hover:opacity-100 group-hover:visible top-full '>
      {isLoading && <Spinner className='w-10 h-10 my-14 mx-auto' />}

      {isSuccess && data.length === 0 && <p>سبد خرید شما خالی است</p>}

      {isSuccess && data.length !== 0 && (
        <ul className='space-y-5'>
          {data.map((item: ResultCartItem) => (
            <li key={item.product._id}>
              {/* Cart Item Flex Container */}
              <div className='flex items-stretch'>
                {/* Image */}
                <img
                  src={item.product.images[0]}
                  className='w-10 h-12 object-cover ml-3'
                  alt=''
                />

                {/* Info container | product title + quantity + price */}
                <div className=''>
                  {/* Title */}
                  <Link
                    to={`/product/${item.product._id}`}
                    className='mb-1 hover:text-stone-400 transition block'
                  >
                    {item.product.title}
                  </Link>

                  {/* Quantity + price */}
                  <p dir='ltr' className='text-lightGray font-sm'>
                    <span className='mr-1 font-both'>{item.quantity} x</span>
                    <span>{item.product.price.toLocaleString()}</span>
                  </p>
                </div>

                {/* Remove button */}
                <button className='mr-auto self-center px-0.5 text-white'>
                  <IoIosClose className='w-5 h-5' />
                </button>
              </div>
            </li>
          ))}

          {/* Total/ViewCart Button/CheckoutButton Container */}
          <div className='space-y-3'>
            {/* Total */}
            <div className='flex items-center justify-between'>
              <span>مجموع</span>
              <span>{totalPrice?.toLocaleString()} ت</span>
            </div>

            {/* view cart Link */}
            <Link
              to='/cart'
              className='block border border-stone-600 hover:border-stone-50 transition text-center py-2 text-xs px-1'
            >
              رفتن به سبد خرید
            </Link>

            {/* Checkout Link */}
            <Link
              to='/checkout'
              className='block bg-stone-800 hover:bg-stone-700 transition text-center py-2 text-xs px-1'
            >
              تصفیه حساب
            </Link>
          </div>
        </ul>
      )}
    </div>
  );
};

export default CartDropdown;
