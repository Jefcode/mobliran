import React from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { BsGift } from 'react-icons/bs';
import { HiArrowRight } from 'react-icons/hi';
import ImageTitle from '../components/Partials/ImageTitle';
import { Link } from 'react-router-dom';

const CartScreen = () => {
  return (
    <>
      {/* Image Title */}
      <ImageTitle>سبــــــد خریــــــــــد</ImageTitle>

      {/* Container */}
      <div className='container px-2 mx-auto my-24'>
        {/* Shopping Cart Flex Container => Cart Items / Cart Total */}
        <div className='flex flex-col items-start space-y-10 lg:flex-row lg:space-y-0'>
          {/* Shopping Cart Items */}
          <div className='w-full lg:w-2/3'>
            {/* Title */}
            <h3 className='mb-10 text-3xl'>سبد خرید شما</h3>

            {/* Items Table */}
            <table className='w-full'>
              <tbody className='divide-y divide-gray-200'>
                {/* Table Row */}
                <tr>
                  {/* Hidden Button */}
                  <td className='w-7'>
                    {/* Remove Button */}
                    <IoMdClose className='text-gray-500 transition cursor-pointer hover:text-gray-700' />
                  </td>

                  {/* Image */}
                  <td className='items-center hidden w-32 py-5 sm:flex space-s-2'>
                    {/* Product Image */}
                    <img
                      src='/products/p-1.jpg'
                      className='object-cover w-24 h-32'
                      alt=''
                    />
                  </td>

                  {/* Product Title */}
                  <td className='w-52'>
                    <a href='/product/test' className='text-lg'>
                      گوزن تزئینی
                    </a>
                  </td>

                  {/* Product Price */}
                  <td className='hidden px-2 sm:table-cell'>
                    <span className='font-extralight text-lightGray whitespace-nowrap'>
                      150,000 ت
                    </span>
                  </td>

                  {/* Count */}
                  <td className='px-2'>
                    <div className='flex flex-col items-stretch my-12 space-y-3 sm:flex-row sm:space-y-0'>
                      {/* Input Container */}
                      <div className='flex justify-between w-full text-sm bg-white border-0 sm:border md:w-52 border-stone-300 text-stone-500'>
                        <span className='hidden px-3 py-4 sm:block'>تعداد</span>

                        {/* Counter Container */}
                        <div className='flex items-center pl-3 space-between space-s-2'>
                          <AiOutlineCaretRight />
                          <input
                            type='text'
                            value='1'
                            className='w-6 h-full text-center outline-none focus:bg-stone-100'
                          />
                          <AiOutlineCaretLeft />
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Total Amount */}
                  <td className='px-2 text-left'>
                    <span className='font-bold text-lightGray whitespace-nowrap'>
                      150,000 ت
                    </span>
                  </td>
                </tr>

                {/* Table Row */}
                <tr>
                  {/* Hidden Button */}
                  <td className='w-7'>
                    {/* Remove Button */}
                    <IoMdClose className='text-gray-500 transition cursor-pointer hover:text-gray-700' />
                  </td>

                  {/* Image */}
                  <td className='items-center hidden w-32 py-5 sm:flex space-s-2'>
                    {/* Product Image */}
                    <img
                      src='/products/product-4.jpg'
                      className='object-cover w-24 h-32'
                      alt=''
                    />
                  </td>

                  {/* Product Title */}
                  <td className='w-52'>
                    <a href='/product/test' className='text-lg'>
                      گوزن تزئینی
                    </a>
                  </td>

                  {/* Product Price */}
                  <td className='hidden px-2 sm:table-cell'>
                    <span className='font-extralight text-lightGray whitespace-nowrap'>
                      150,000 ت
                    </span>
                  </td>

                  {/* Count */}
                  <td className='px-2'>
                    <div className='flex flex-col items-stretch my-12 space-y-3 sm:flex-row sm:space-y-0'>
                      {/* Input Container */}
                      <div className='flex justify-between w-full text-sm bg-white border-0 sm:border md:w-52 border-stone-300 text-stone-500'>
                        <span className='hidden px-3 py-4 sm:block'>تعداد</span>

                        {/* Counter Container */}
                        <div className='flex items-center pl-3 space-between space-s-2'>
                          <AiOutlineCaretRight />
                          <input
                            type='text'
                            value='1'
                            className='w-6 h-full text-center outline-none focus:bg-stone-100'
                          />
                          <AiOutlineCaretLeft />
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Total Amount */}
                  <td className='px-2 text-left'>
                    <span className='font-bold text-lightGray whitespace-nowrap'>
                      150,000 ت
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Discount Code form */}
            <form>
              {/* Flex Container */}
              <div className='flex items-center px-4 py-5 space-s-3 bg-primaryGray border-y border-stone-200'>
                {/* Icon */}
                <BsGift className='text-2xl sm:text-lg' />

                {/* Input */}
                <input
                  type='text'
                  className='w-full text-sm bg-transparent outline-none text-stone-400 placeholder:font-extralight'
                  placeholder='کد تخفیف'
                />

                {/* Apply Cuppon */}
                <button className='outline-none whitespace-nowrap'>
                  اعمال کد تخفیف
                </button>
              </div>
            </form>

            {/* Go Back to Shop Link */}
            <a
              href='/'
              className='flex items-center mt-10 font-light space-s-3 text-lightGray'
            >
              <HiArrowRight />
              <span>بازگشت به فروشگاه</span>
            </a>
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
                      1,850,000 تومان
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
                <span className=''>1,850,000 تومان</span>
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
    </>
  );
};

export default CartScreen;
