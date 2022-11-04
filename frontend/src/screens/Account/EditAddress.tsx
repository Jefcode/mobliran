import React from 'react';

const EditAddress = () => {
  return (
    <div>
      <p className='text-lightGray'>
        آدرس زیر به صورت پیش فرض در فرایند خرید استفاده خواهد شد.
      </p>

      {/* Page Title */}
      <h1 className='text-2xl mt-10 mb-2 font-semibold'>آدرس محل تحویل</h1>

      {/* Shipping Address Form */}
      <form>
        {/* Form Container */}
        <div className='space-y-5'>
          {/* Form Control / Input + Label + Possible Error message */}
          <div className='space-y-2'>
            <label htmlFor='' className='text-stone-700'>
              کشور *
            </label>
            <input
              type='text'
              className='w-full px-5 py-3 text-lightGray border border-stone-200 outline-none focus:bg-stone-50 duration-200 '
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='' className='text-stone-700'>
              شهر *
            </label>
            <input
              type='text'
              className='w-full px-5 py-3 text-lightGray border border-stone-200 outline-none focus:bg-stone-50 duration-200'
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='' className='text-stone-700'>
              آدرس *
            </label>
            <input
              type='text'
              className='w-full px-5 py-3 text-lightGray border border-stone-200 outline-none focus:bg-stone-50 duration-200'
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='' className='text-stone-700'>
              کد پستی *
            </label>
            <input
              type='email'
              className='w-full px-5 py-3 text-lightGray border border-stone-200 outline-none focus:bg-stone-50 duration-200'
            />
          </div>
        </div>

        {/* Submittion Button */}
        <button className='btn mt-5'>ثبت اطلاعــــــــــات</button>
      </form>
    </div>
  );
};

export default EditAddress;
