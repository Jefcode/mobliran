import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      {/* Greeting Text */}
      <p className='text-lightGray font-light leading-loose'>
        سلام <span className='font-medium font-both'>jefcode</span> (
        <span className='font-medium font-both'>jefcode</span> نیستید؟{' '}
        <a href='/' className='text-stone-700'>
          خارج شوید
        </a>
        )
      </p>

      {/* Information Text */}
      <p className='text-lightGray font-light leading-loose'>
        از طریق داشبورد اکانت خود می توانید{' '}
        <Link to='orders' className='text-stone-700'>
          سفارش های اخیر
        </Link>{' '}
        خود را ببینید،{' '}
        <Link to='edit-address' className='text-stone-700'>
          ادرس رسید محصول
        </Link>{' '}
        را مدیریت کنید و{' '}
        <Link to='edit-account' className='text-stone-700'>
          اطلاعات حساب کاربری
        </Link>{' '}
        تان را تغییر دهید.
      </p>
    </div>
  );
};

export default Dashboard;
