import React, { useState } from 'react';

import { AiOutlineHeart } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

import ProductItem from '../components/Products/ProductItem';
import ReviewForm from '../components/Forms/ReviewForm';
import Rating from '../components/common/Rating';
import products from '../data/products';
import ProductQuantityForm from '../components/Products/ProductQuantityForm';

const ProductDetailScreen = () => {
  const params = useParams();
  const [tab, setTab] = useState('description'); // description / informations / reviews

  // Find this Product
  const { id: productId } = params;
  const product = products.find((product) => product._id === productId);

  return (
    <>
      {/* Imgs / Breadcrumb / Info */}
      <div className='bg-secondaryGray'>
        {/* Container */}
        <div className='container px-6 mx-auto'>
          {/* Breadcrumb Container */}
          <div className='flex flex-wrap w-full gap-4 pt-10 text-gray-400 pb-14'>
            <div className='after:content-["/"] after:mr-4 last:after:content-[""]'>
              <a href='/' className='transition hover:text-gray-600'>
                خانه
              </a>
            </div>

            <div className='after:content-["/"] after:mr-4 last:after:content-[""]'>
              <a href='/' className='transition hover:text-gray-600'>
                لوازم خانگی
              </a>
            </div>

            <div className='after:content-["/"] after:mr-4 last:after:content-[""]'>
              {product?.title}
            </div>
          </div>

          {/* Images / Info Container */}
          <div className='flex flex-col space-y-8 lg:flex-row lg:space-y-0'>
            {/* Images Half */}
            <div className='grid w-full grid-cols-4 gap-4 lg:w-1/2 md:grid-cols-5 md:grid-rows-4'>
              {/* Main Image */}
              <img
                src={product?.images[0]}
                className='order-1 object-cover w-full col-span-4 md:row-span-4 md:h-full md:order-2'
                alt=''
              />

              {/* Minor Images */}
              <img
                src={product?.images[1]}
                className='order-2 object-cover w-full col-span-2 row-auto sm:col-span-1 md:h-full md:order-1'
                alt=''
              />
              <img
                src={product?.images[2]}
                className='order-3 object-cover w-full col-span-2 row-auto sm:col-span-1 md:h-full'
                alt=''
              />
              <img
                src={product?.images[3]}
                className='order-4 object-cover w-full col-span-2 row-auto sm:col-span-1 md:h-full'
                alt=''
              />
              <img
                src={product?.images[4]}
                className='order-5 object-cover w-full col-span-2 row-auto sm:col-span-1 md:h-full'
                alt=''
              />
            </div>

            {/* Info Half */}
            <div className='w-full pr-0 lg:w-1/2 lg:pr-32'>
              {/* Title */}
              <h1 className='text-3xl'>{product?.title}</h1>

              {/* Price */}
              <p className='mt-3 font-light text-gray-600'>
                {product?.price.toLocaleString()} تومان
              </p>

              {/* Rating Container */}
              <div className='flex items-center text-sm space-s-2 mt-14'>
                {/* Stars Container */}
                <Rating score={3.6} />

                <span className='text-black/50'>(10 نظر مشتری)</span>
              </div>

              {/* Description */}
              <p className='mt-5 font-light text-gray-400'>{product?.intro}</p>

              {/* Add To Cart Container */}
              <ProductQuantityForm max={product?.countInStock ?? 1} />

              {/* Add To wishlist */}
              <div className='flex items-center cursor-pointer mb-14 space-s-2'>
                <AiOutlineHeart />
                <span>اضافه کردن به علاقه مندی ها</span>
              </div>

              {/* ProductCode / Categories / Tags */}
              <div className='flex flex-col space-y-1 text-sm'>
                <div className='space-s-2'>
                  <span>کد محصول:</span>
                  <span>025</span>
                </div>
                <div className='space-s-2'>
                  <span>دسته بندی ها:</span>
                  {product?.categories.map((category, idx) => (
                    <React.Fragment key={idx}>
                      <a
                        href='/'
                        className='text-gray-500 transition hover:text-black'
                      >
                        لوازم خانگی
                      </a>{' '}
                    </React.Fragment>
                  ))}
                </div>
                <div className='space-s-2'>
                  <span>کلمات کلیدی:</span>
                  <a
                    href='/'
                    className='text-gray-500 transition hover:text-black'
                  >
                    جعبه
                  </a>
                  ،
                  <a
                    href='/'
                    className='text-gray-500 transition hover:text-black'
                  >
                    چوب
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className='pt-20 sm:pt-24 md:pt-32 text-stone-600'>
            {/* Panel Control Container */}
            <div className='flex flex-col border border-b-0 divide-y sm:inline-flex sm:flex-row border-black/15 sm:divide-y-0 sm:divide-s divide-black/15'>
              {/* Item 1 */}
              <div
                onClick={() => setTab('description')}
                className={`cursor-pointer px-10 md:px-14 py-3 ${
                  tab === 'description' && 'bg-black text-white'
                }`}
              >
                توضیحات
              </div>
              <div
                onClick={() => setTab('informations')}
                className={`cursor-pointer px-10 md:px-14 py-3 ${
                  tab === 'informations' && 'bg-black text-white'
                }`}
              >
                اطلاعات بیشــــتر
              </div>
              <div
                onClick={() => setTab('reviews')}
                className={`cursor-pointer px-10 md:px-14 py-3 ${
                  tab === 'reviews' && 'bg-black text-white'
                }`}
              >
                نظر خریداران
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Panels */}
      <div className='bg-white border border-black/15'>
        {/* Container */}
        <div className='container flex flex-col px-6 mx-auto'>
          {/* Panels */}
          {tab === 'description' ? (
            // Description Panel
            <div className='py-24'>
              <h5 className='mb-5 text-xl'>توضیحات</h5>
              <p className='font-light text-stone-500'>
                {product?.description}
              </p>
            </div>
          ) : tab === 'informations' ? (
            // Informations Panel
            <div className='py-24'>
              <h5 className='mb-5 text-xl'>اطلاعات بیشتر</h5>

              {/* Additional Information Table */}
              <table className=' w-52 text-start'>
                <tbody>
                  <tr className='text-lightGray'>
                    <th>وزن</th>
                    <td className='py-1 text-black/50'>
                      {product?.info.weight}
                    </td>
                  </tr>
                  <tr className='text-lightGray'>
                    <th>ابعــــــاد</th>
                    <td className='py-1 text-black/50' dir='ltr'>
                      {product?.info.dimentions}
                    </td>
                  </tr>
                  <tr className='text-lightGray'>
                    <th>رنگ</th>
                    <td className='py-1 text-black/50'>
                      {product?.info.colors}
                    </td>
                  </tr>
                  <tr className='text-lightGray'>
                    <th>جنس</th>
                    <td className='py-1 text-black/50'>
                      {product?.info.material}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : tab === 'reviews' ? (
            // Reviews panel
            <div className='py-24'>
              <h5 className='mb-5 text-xl font-bold'>
                2 نظر برای {product?.title}
              </h5>

              {/* Comments Container */}
              <div className='flex flex-col mb-8 space-y-8'>
                {/* Comment Item */}
                <div className='flex items-start space-s-4'>
                  {/* User Avatar */}
                  <img
                    src='/avatars/avatar-1.png'
                    className='object-cover w-14 h-14'
                    alt=''
                  />

                  {/* Comment Info */}
                  <div className='flex flex-col items-start space-y-3'>
                    <Rating score={4} className='text-sm' />

                    {/* User name / Comment Date */}
                    <div className='flex space-s-2 text-lightGray'>
                      <h6 className='font-bold'>امیرحسین جعفری پناه</h6>

                      <span className=''>- 1401/08/09</span>
                    </div>

                    {/* Comment Text */}
                    <p className='font-light text-lightGray'>بسیار زیبا است</p>
                  </div>
                </div>
              </div>

              {/* Review Form Container */}
              <ReviewForm />
            </div>
          ) : null}
        </div>
      </div>

      {/* Related Products */}
      <div className='py-20 bg-white'>
        <div className='container mx-auto'>
          {/* Title */}
          <p className='px-5 mb-10 text-lightGray'>محصولات مرتبط</p>

          {/* Products Flex Container */}
          <div className='flex flex-col items-start sm:flex-row sm:flex-wrap'>
            {products.slice(0, 4).map((product) => (
              <ProductItem product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailScreen;
