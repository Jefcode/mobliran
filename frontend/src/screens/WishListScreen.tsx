import { IoMdClose } from 'react-icons/io';

import ImageTitle from '../components/Partials/ImageTitle';
import QuickLookBtn from '../components/Products/QuickLookBtn';
import products from '../data/products';

const WishListScreen = () => {
  return (
    <>
      {/* Image Title */}
      <ImageTitle>علاقه مندی ها</ImageTitle>

      {/* Wish list Container */}
      <div className='container mx-auto px-6 py-32'>
        {/* <NoItemFound /> */}

        {/* Items Table */}
        <table className='w-full'>
          <tbody>
            {products.slice(0, 2).map((product) => (
              <tr key={product._id} className='border-b border-stone-200'>
                {/* Hidden Button */}
                <td className='w-7'>
                  {/* Remove Button */}
                  <IoMdClose className='text-gray-500 transition cursor-pointer hover:text-gray-700 ml-2' />
                </td>

                {/* Image */}
                <td className='hidden sm:flex items-center w-32 py-5 space-s-2'>
                  {/* Product Image */}
                  <img
                    src={product.images[0]}
                    className='object-cover w-24 h-28'
                    alt=''
                  />
                </td>

                {/* Title/Price/InStock/AddToCart Table Cell */}
                <td className='w-full'>
                  {/* Content Flex Container */}
                  <div className='flex flex-col items-stretch space-y-4 lg:space-y-0 lg:flex-row lg:items-center justify-between py-3'>
                    {/* Product Title */}
                    <div className='flex items-center justify-between lg:justify-start'>
                      <a href='/' className='text-xl'>
                        {product.title}
                      </a>
                      <QuickLookBtn
                        product={product}
                        className='!py-2 !px-7 mr-2 hover:bg-black/75 duration-200'
                      />
                      {/* <button className='bg-black text-white px-7 py-2 mr-2 hover:bg-black/75 duration-200'>
                        بررسی آنی
                      </button> */}
                    </div>

                    {/* Price/InStock/AddToCart Flex Container */}
                    <div className='flex space-s-5 sm:space-s-14 items-center'>
                      {/* Price */}
                      <div>
                        <span className='text-lightGray font-light'>
                          {product.price.toLocaleString()} تومان
                        </span>
                      </div>

                      {/* InStock */}
                      <div>
                        <span className='text-lightGray'>
                          {product.countInStock > 0 ? 'موجود' : 'ناموجود'}
                        </span>
                      </div>

                      {/* Add to cart */}
                      <button className='outline-none hover:text-black/75 transition'>
                        افزودن به سبد خرید
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

// const NoItemFound = () => {
//   return (
//     <div className='text-center p-5 border-b berder-stone-200 text-lightGray '>
//       هیچ محصولی به لیست علاقه مندی اضافه نشده است.
//     </div>
//   );
// };

export default WishListScreen;
