import React from 'react';

import products from '../../data/products';
import Filter from './Filter';
import ProductItem from './ProductItem';

const Products = () => {
  return (
    <section id='products' className='mt-5 md:mt-14 mb-14'>
      {/* Container */}
      <div className='container mx-auto'>
        {/* <Filter /> */}

        {/* Products Flex Container */}
        <div className='flex flex-col items-start sm:flex-row sm:flex-wrap'>
          {products.map((product) => (
            <ProductItem product={product} key={product._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
