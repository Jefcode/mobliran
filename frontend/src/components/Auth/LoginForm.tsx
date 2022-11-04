import React from 'react';

const LoginForm = () => {
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
            type='password'
            name='password'
            placeholder='رمز عبور'
            className='w-full px-3 py-4 border border-gray-300 outline-none placeholder:font-light focus:bg-gray-50'
          />
        </div>

        {/* remember me */}
        <div className='flex items-center font-light text-gray-400 space-s-2'>
          <input type='checkbox' />
          <span className='text-sm'>مرا به خاطر بسپار</span>
        </div>
      </div>

      <div className='mt-6'>
        {/* Lost Password */}
        <a
          href='/'
          className='block mb-4 text-sm transition text-black/50 hover:text-black'
        >
          رمز عبور خود را فراموش کرده ام
        </a>

        {/* Button */}
        <button className='w-full px-2 py-4 text-center text-white bg-black'>
          ورود
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
