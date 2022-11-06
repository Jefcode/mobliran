import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
  return (
    <div className='absolute left-0 z-50 invisible p-5 text-white transition-all bg-black opacity-0 w-60 group-hover:opacity-100 group-hover:visible top-full '>
      <ul className='space-y-5'>
        <li>
          {/* Cart Item Flex Container */}
          <div className='flex items-stretch'>
            {/* Image */}
            <img
              src='/products/p-1.jpg'
              className='w-10 h-12 object-cover ml-3'
              alt=''
            />

            {/* Info container | product title + quantity + price */}
            <div className=''>
              {/* Title */}
              <a
                href='/'
                className='mb-1 hover:text-stone-400 transition block'
              >
                گوزن تزئینی
              </a>

              {/* Quantity + price */}
              <p dir='ltr' className='text-lightGray font-sm'>
                <span className='mr-1 font-both'>1 x</span>
                <span>15,000</span>
              </p>
            </div>

            {/* Remove button */}
            <button className='mr-auto self-center px-0.5 text-white'>
              <IoIosClose className='w-5 h-5' />
            </button>
          </div>
        </li>
        <li>
          {/* Cart Item Flex Container */}
          <div className='flex items-stretch'>
            {/* Image */}
            <img
              src='/products/product-1.jpg'
              className='w-10 h-12 object-cover ml-3'
              alt=''
            />

            {/* Info container | product title + quantity + price */}
            <div className=''>
              {/* Title */}
              <a
                href='/'
                className='mb-1 hover:text-stone-400 transition block'
              >
                صندلی چوبی
              </a>

              {/* Quantity + price */}
              <p dir='ltr' className='text-lightGray font-sm'>
                <span className='mr-1 font-both'>1 x</span>
                <span>15,000</span>
              </p>
            </div>

            {/* Remove button */}
            <button className='mr-auto self-center px-0.5 text-white'>
              <IoIosClose className='w-5 h-5' />
            </button>
          </div>
        </li>
        {/* Total/ViewCart Button/CheckoutButton Container */}
        <div className='space-y-3'>
          {/* Total */}
          <div className='flex items-center justify-between'>
            <span>مجموع</span>
            <span>25,000 ت</span>
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
    </div>
  );
};

export default CartDropdown;
