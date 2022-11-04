import React from 'react';

const AccountDetails = () => {
  return (
    <div>
      {/* Edit Account Details Form */}
      <form>
        {/* Form Container */}
        <div className='space-y-5'>
          {/* Form Control / Input + Label + Possible Error message */}
          <div className='space-y-2'>
            <label htmlFor='' className='text-stone-700'>
              نام *
            </label>
            <input
              type='text'
              className='w-full px-5 py-3 text-lightGray border border-stone-200 outline-none focus:bg-stone-50 duration-200 '
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='' className='text-stone-700'>
              نام خانوادگی *
            </label>
            <input
              type='text'
              className='w-full px-5 py-3 text-lightGray border border-stone-200 outline-none focus:bg-stone-50 duration-200'
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='' className='text-stone-700'>
              نام نمایشی *
            </label>
            <input
              type='text'
              className='w-full px-5 py-3 text-lightGray border border-stone-200 outline-none focus:bg-stone-50 duration-200'
            />

            {/* Description for this feild */}
            <p className='text-lightGray text-sm'>
              این نامی هست که در وب سایت نمایش داده خواهد شد. مثلا در نظرات
              محصولات و حساب کاربری
            </p>
          </div>

          <div className='space-y-2'>
            <label htmlFor='' className='text-stone-700'>
              آدرس ایمیل *
            </label>
            <input
              type='email'
              className='w-full px-5 py-3 text-lightGray border border-stone-200 outline-none focus:bg-stone-50 duration-200'
            />
          </div>

          {/* Password */}
          <h5 className='font-bold text-black text-lg'>رمز عبور</h5>

          {/* Currrent Password */}
          <div className='space-y-2'>
            <label htmlFor='' className='text-stone-700'>
              رمز عبور فعلی (اگر مایل به تغییر نیستید، خالی بگذارید)
            </label>
            <input
              type='email'
              className='w-full px-5 py-3 text-lightGray border border-stone-200 outline-none focus:bg-stone-50 duration-200'
            />
          </div>

          {/* New Password */}
          <div className='space-y-2'>
            <label htmlFor='' className='text-stone-700'>
              رمز عبور جدید (اگر مایل به تغییر نیستید، خالی بگذارید)
            </label>
            <input
              type='email'
              className='w-full px-5 py-3 text-lightGray border border-stone-200 outline-none focus:bg-stone-50 duration-200'
            />
          </div>

          {/* Confirm new password */}
          <div className='space-y-2'>
            <label htmlFor='' className='text-stone-700'>
              تکرار رمز عبور
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

export default AccountDetails;
