import { Link } from 'react-router-dom';

import Hero from '../components/Partials/Hero';
import ProductItem from '../components/Products/ProductItem';
import products from '../data/products';

const HomeScreen = () => {
  return (
    <>
      <Hero />

      {/* Recent Products */}
      <section id='products' className='mt-10 mb-14'>
        {/* Container */}
        <div className='container mx-auto'>
          {/* Section Title */}
          <div className='flex px-6 mt-2 items-center justify-between space-s-2 mb-10'>
            <h3 className='text-2xl font-bold'>جدیدترین محصولات</h3>
            <Link to='/shop' className='btn hidden sm:block'>
              رفتن به فروشگاه
            </Link>
          </div>

          {/* Products Flex Container */}
          <div className='flex flex-col items-start sm:flex-row sm:flex-wrap'>
            {products.map((product) => (
              <ProductItem product={product} key={product._id} />
            ))}
          </div>

          {/* Go to SHop */}
          <div className='px-6 sm:hidden'>
            <Link to='/shop' className='btn block w-full text-center'>
              رفتن به فروشگاه
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
