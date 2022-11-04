import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NavAccount = () => {
  return (
    <div className='relative group'>
      <Link to='/cart' className='flex items-center h-full'>
        {/* Avatar */}
        <img
          src='/images/avatar.png'
          className='w-6 h-6 rounded-full ml-2'
          alt='User Avatar'
        />
        <span className='ml-1'>جف کد</span>
        <AiFillCaretDown className='w-2 h-2' />
      </Link>

      {/* Dropdown */}
      <div className='absolute -right-10 z-10 invisible text-white transition-all bg-black opacity-0 w-52 group-hover:opacity-100 group-hover:visible top-full '>
        {/* Dropdown Flex Container */}
        <ul className='flex flex-col space-y-3 p-5 py-6'>
          <li className='text-stone-400 hover:text-stone-200 transition'>
            <Link
              to='/my-account'
              className='myGroup flex items-center overflow-hidden'
            >
              حساب کاربری من
            </Link>
          </li>
          <li className='text-stone-400 hover:text-stone-200 transition'>
            <a href='/' className='myGroup flex items-center overflow-hidden'>
              پروفایل
            </a>
          </li>
          <li className='text-stone-400 hover:text-stone-200 transition'>
            <a href='/' className='myGroup flex items-center overflow-hidden'>
              ویرایش پروفایل
            </a>
          </li>
          <li className='text-stone-400 hover:text-stone-200 transition'>
            <a href='/' className='myGroup flex items-center overflow-hidden'>
              خروج از حساب
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavAccount;
