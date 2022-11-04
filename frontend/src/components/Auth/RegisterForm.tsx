import React from 'react';

const RegisterForm = () => {
  return (
    <form>
      <div className='space-y-3'>
        <div>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='نام کاربری'
            className='w-full px-3 py-4 border border-gray-300 outline-none placeholder:font-light focus:bg-gray-50'
          />
        </div>

        <div>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='ایمیل'
            className='w-full px-3 py-4 border border-gray-300 outline-none placeholder:font-light focus:bg-gray-50'
          />
        </div>

        <div>
          <input
            type='password'
            name='password'
            placeholder='رمز عبور'
            className='w-full px-3 py-4 border border-gray-300 outline-none placeholder:font-light focus:bg-gray-50'
          />
        </div>

        <div>
          <input
            type='password'
            name='confirmPassword'
            placeholder='تکرار رمز عبور'
            className='w-full px-3 py-4 border border-gray-300 outline-none placeholder:font-light focus:bg-gray-50'
          />
        </div>
      </div>

      {/* Button */}
      <button className='w-full px-2 py-4 mt-6 text-center text-white bg-black'>
        ثبت نام
      </button>
    </form>
  );
};

export default RegisterForm;
