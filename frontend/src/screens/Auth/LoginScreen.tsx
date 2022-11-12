import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate } from 'react-router-dom';

import Input from '../../components/common/Input';
import ImageTitle from '../../components/Partials/ImageTitle';
import { loginSchema } from '../../components/Auth/schemas';
import useAuth from '../../hooks/useAuth';
import LoadingBtn from '../../components/common/LoadingBtn';
import { useEffect } from 'react';

export interface IFormInputs {
  email: string;
  password: string;
  rememberMe?: boolean;
}

const LoginScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the redirect path from search query
  const search = new URLSearchParams(location.search);
  const redirect: string = search.get('redirect') ?? '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  // Sign in useAuth
  const {
    signIn,
    loginMutations: { isLoading, isSuccess },
  } = useAuth();

  // Redirect user when successfully logged in
  useEffect(() => {
    if (isSuccess) {
      navigate(redirect);
    }
  }, [isSuccess, navigate, redirect]);

  const loginSubmitHandler = (data: IFormInputs) => {
    signIn(data);
  };

  return (
    <>
      <ImageTitle>ورود به حساب کاربری</ImageTitle>

      {/* Login Container */}
      <div className='max-w-2xl mx-auto px-6 py-28'>
        {/* Title */}
        <h2 className='text-2xl mb-10'>ورود به حساب کاربری</h2>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit(loginSubmitHandler)}
          className='text-light'
        >
          <div className='mb-4'>
            <label className='mb-1 block'>آدرس ایمیل *</label>
            <Input
              {...register('email')}
              className={`${errors.email ? '!border-red-500' : ''}`}
            />
            <p className='text-red-500 text-sm mt-1'>{errors.email?.message}</p>
          </div>

          <div className='mb-6'>
            <label className='mb-1 block'>رمز عبور *</label>
            <Input
              type='password'
              {...register('password')}
              className={`${errors.password ? '!border-red-500' : ''}`}
            />
            <p className='text-red-500 text-sm mt-1'>
              {errors.password?.message}
            </p>
          </div>

          {/* Remember me */}
          <div className='flex items-center space-s-2 mb-8'>
            <input
              type='checkbox'
              id='rememberMe'
              {...register('rememberMe')}
            />
            <label htmlFor='rememberMe'>مرا به خاطر بسپار</label>
          </div>

          <LoadingBtn loading={isLoading}>وارد شدن</LoadingBtn>
        </form>

        {/* Forgot password / Register Link */}
        <div className='text-sm mt-6 text-stone-500 flex flex-col space-y-2'>
          <a href='/' className='hover:text-stone-700 transition'>
            رمز عبور خود را فراموش کرده ام
          </a>

          <a href='/' className='hover:text-stone-700 transition'>
            ثبت نام
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
