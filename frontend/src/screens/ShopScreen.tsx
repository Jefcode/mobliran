import React from 'react';
import Filter from '../components/Products/Filter';
import ProductItem from '../components/Products/ProductItem';

import products from '../data/products';

const ShopScreen = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className='bg-stone-100 w-full py-8'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-wrap w-full gap-4 text-gray-400'>
            <div className='after:content-["/"] after:mr-4 last:after:content-[""]'>
              <a href='/' className='transition hover:text-gray-600'>
                خانه
              </a>
            </div>

            <div className='after:content-["/"] after:mr-4 last:after:content-[""]'>
              فروشگاه
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <section id='products' className='mt-5 md:mt-14 mb-14'>
        {/* Container */}
        <div className='container mx-auto'>
          <Filter />

          {/* Products Flex Container */}
          <div className='flex flex-col items-start sm:flex-row sm:flex-wrap'>
            {products.map((product) => (
              <ProductItem product={product} key={product._id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopScreen;
