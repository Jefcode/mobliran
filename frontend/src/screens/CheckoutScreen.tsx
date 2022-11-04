import { useState } from 'react';
import { motion } from 'framer-motion';

import ImageTitle from '../components/Partials/ImageTitle';
import Input from '../components/Utils/Input';

const couponVariants = {
  closed: {
    height: 0,
  },
  open: {
    height: 'auto',
  },
};

const CheckoutScreen = () => {
  const [couponOpen, setCouponOpen] = useState(false);
  const [shipToAnotherAddress, setShipToAnotherAddress] = useState(false);

  return (
    <>
      {/* Image Title */}
      <ImageTitle>تصفیـــــــه حساب</ImageTitle>

      {/* Checkout Container */}
      <div className='container px-6 mx-auto py-28'>
        {/* Coupon Code Section */}
        <section id='coupon'>
          {/* Notice */}
          <div className='w-full px-5 mb-10 border py-7 border-stone-200 text-lightGray '>
            کد تخفیف دارید؟
            {/* Button to Toggle Coupon Section */}
            <span
              className='float-none mr-2 font-light whitespace-pre-wrap outline-none cursor-pointer sm:float-left text-stone-600'
              onClick={() => setCouponOpen(!couponOpen)}
            >
              برای وارد کردن کد خود اینجا کلیک کنید
            </span>
          </div>

          {/* Coupon Form Container */}
          <motion.div
            layout
            variants={couponVariants}
            initial='closed'
            animate={couponOpen ? 'open' : 'closed'}
            transition={{
              duration: 1,
            }}
            className='overflow-hidden'
          >
            <form>
              <p className='mb-2 text-lightGray'>
                اگر کد تخفیف دارید لطفا در زیر اعمال کنید
              </p>
              <Input placeholder='کد تخفیف' className='text-sm font-light' />
              <button className='!py-2 mt-4 btn mb-8'>اعمال کد</button>
            </form>
          </motion.div>
        </section>

        {/* Shipping Address Section */}
        <section id='shipping' className='text-stone-600'>
          <h2 className='mb-8 text-2xl text-stone-900'>اطلاعات آدرس تحویل</h2>

          {/* Address Data Container: If user's address is already set */}
          <div className='flex flex-col mb-8 space-y-3'>
            <p className='font-light text-lightGray'>
              <span className='ml-1 font-bold'>کشور:</span>
              <span>ایران</span>
            </p>

            <p className='font-light text-lightGray'>
              <span className='ml-1 font-bold'>شهر:</span>
              <span>بیرجند</span>
            </p>

            <p className='font-light text-lightGray'>
              <span className='ml-1 font-bold'>آدرس:</span>
              <span>سجاد شهر - خیابان تهامی - در قرمز</span>
            </p>

            <p className='font-light text-lightGray'>
              <span className='ml-1 font-bold'>کد پستی:</span>
              <span>1854699</span>
            </p>
          </div>

          {/* Option to change the address */}
          <div className='flex items-center space-s-2'>
            <input
              onChange={(e) => setShipToAnotherAddress(e.target.checked)}
              checked={shipToAnotherAddress}
              type='checkbox'
              id='shipToAnotherAddress'
            />
            <label htmlFor='shipToAnotherAddress'>ارسال به آدرسی دیگر؟</label>
          </div>

          {/* Shiping Address Container */}
          {shipToAnotherAddress && (
            <div className='mt-5 space-y-5'>
              {/* Form Control / Input + Label + Possible Error message */}
              <div className='space-y-2'>
                <label htmlFor='' className='text-stone-700'>
                  کشور *
                </label>
                <Input type='text' />
              </div>

              <div className='space-y-2'>
                <label htmlFor='' className='text-stone-700'>
                  شهر *
                </label>
                <Input type='text' />
              </div>

              <div className='space-y-2'>
                <label htmlFor='' className='text-stone-700'>
                  آدرس *
                </label>
                <Input type='text' />
              </div>

              <div className='space-y-2'>
                <label htmlFor='' className='text-stone-700'>
                  کد پستی *
                </label>
                <Input type='email' />
              </div>
            </div>
          )}

          {/* Special Note for delivery */}
          <div className='mt-8'>
            <p>یادداشت های سفارش (اختیاری)</p>
            <textarea
              cols={30}
              className='w-full p-4 mt-2 text-sm border h-52 border-stone-200 text-lightGray placeholder:font-light focus:outline-none focus:bg-stone-50'
              placeholder='نکات خاص درباره سفارش و تحویل'
            ></textarea>
          </div>
        </section>

        {/* Order Details Section */}
        <section id='order-details' className='mt-10 text-stone-600'>
          {/* Section title */}
          <h2 className='mb-8 text-2xl text-stone-900'>اطلاعات سفارش</h2>

          {/* Order Table */}
          <table className='w-full text-right text-lightGray'>
            <thead>
              <tr className='border-b border-b-stone-200'>
                <th className='py-4'>محصول</th>
                <th>قیمت</th>
              </tr>
            </thead>
            <tbody className='font-light'>
              <tr className='border-b border-b-stone-200'>
                <td className='py-4'>
                  {/* Product Name */}
                  <span className='ml-2'>گوزن تزئینی</span>
                  {/* Quantity */}
                  <span
                    className='font-bold font-both whitespace-nowrap'
                    dir='ltr'
                  >
                    1 x
                  </span>
                </td>
                <td className='w-auto'>150,000 تومان</td>
              </tr>
              <tr className='border-b border-b-stone-200'>
                <td className='py-4'>
                  {/* Product Name */}
                  <span className='ml-2'>ساعت دیواری فلزی</span>
                  {/* Quantity */}
                  <span
                    className='font-bold font-both whitespace-nowrap'
                    dir='ltr'
                  >
                    1 x
                  </span>
                </td>
                <td className='w-auto'>78,000 تومان</td>
              </tr>
            </tbody>
            <tfoot className='font-light'>
              <tr className='border-b border-b-stone-200'>
                <th className='py-4'>مجموع</th>
                <td className='w-auto'>78,000 تومان</td>
              </tr>
              <tr className='border-b border-b-stone-200'>
                <th className='py-4'>نحوه ارسال</th>
                <td className='w-auto'>پست پیشتاز (20,000 تومان)</td>
              </tr>
              <tr className='border-b border-b-stone-200'>
                <th className='py-4'>قیمت نهایی</th>
                <th className='w-auto'>162,000</th>
              </tr>
            </tfoot>
          </table>

          {/* Payment Method */}
          <div className='px-5 my-10 border border-stone-200 py-7'>
            <span className='ml-1'>پرداخت از طریق: </span>

            <span className='text-lightGray'>زرین پال</span>
          </div>

          {/* Place Order Button */}
          <button className='btn'>پرداختـــــــــــــ</button>
        </section>
      </div>
    </>
  );
};

export default CheckoutScreen;
