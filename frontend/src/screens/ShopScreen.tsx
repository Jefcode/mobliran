import Filter from '../components/Products/Filter';
import {
  PriceRange,
  SortOptions,
  useProducts,
} from '../components/Products/hooks/useProducts';
import Products from '../components/Products/Products';

const ShopScreen = () => {
  // Get products
  const {
    productsQuery: { data: products = [], isLoading, isError },
    category,
    sortBy,
    priceRange,
    setCategory,
    setSortBy,
    setPriceRange,
  } = useProducts();

  // Changing Category event in Filter
  const categoryChangeHandler = (category: string | undefined) => {
    setCategory(category);
  };

  // Changing sort method in Filter
  const changeSortHandler = (sort: SortOptions) => {
    setSortBy(sort);
  };

  // Changing Price Event in Filter
  const priceRangeChangeHandler = (priceRange: PriceRange) => {
    setPriceRange(priceRange);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className='w-full py-8 bg-stone-100'>
        <div className='container px-6 mx-auto'>
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
          <Filter
            selectedCategory={category}
            onChangeCategory={categoryChangeHandler}
            sortBy={sortBy}
            onChangeSort={changeSortHandler}
            priceRange={priceRange}
            onChangePriceRange={priceRangeChangeHandler}
          />

          {/* Products Flex Container */}
          <Products
            products={products}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </section>
    </>
  );
};

export default ShopScreen;
