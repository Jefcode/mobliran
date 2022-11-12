import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Input from '../../components/common/Input';
import ImageTitle from '../../components/Partials/ImageTitle';
import { registerSchema } from '../../components/Auth/schemas';
import useAuth from '../../hooks/useAuth';
import LoadingBtn from '../../components/common/LoadingBtn';
import { useEffect } from 'react';

export interface IRegisterFormInputs {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the redirect path from search query
  const search = new URLSearchParams(location.search);
  const redirect: string = search.get('redirect') ?? '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormInputs>({
    resolver: yupResolver(registerSchema),
  });

  // useAuth
  const {
    registerMutations: { isLoading, isSuccess },
    signUp,
  } = useAuth();

  // Redirect user when successfully logged in
  useEffect(() => {
    if (isSuccess) {
      navigate(redirect);
    }
  }, [isSuccess, navigate, redirect]);

  const registerSubmitHandler = (data: IRegisterFormInputs) => {
    signUp(data);
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
          onSubmit={handleSubmit(registerSubmitHandler)}
          className='text-light'
        >
          <div className='mb-4'>
            <label className='mb-1 block'>نام کاربری</label>
            <Input
              {...register('username')}
              className={`${errors.username ? '!border-red-500' : ''}`}
            />
            <p className='text-red-500 text-sm mt-1'>
              {errors.username?.message}
            </p>
          </div>

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

          <div className='mb-6'>
            <label className='mb-1 block'>تکرار رمز عبور *</label>
            <Input
              type='password'
              {...register('confirmPassword')}
              className={`${errors.confirmPassword ? '!border-red-500' : ''}`}
            />
            <p className='text-red-500 text-sm mt-1'>
              {errors.confirmPassword?.message}
            </p>
          </div>

          <LoadingBtn loading={isLoading}>وارد شدن</LoadingBtn>
        </form>

        {/* Forgot password / Register Link */}
        <div className='text-sm mt-6 text-stone-500 flex flex-col space-y-2'>
          <Link
            to={`/auth/login?redirect=${redirect}`}
            className='hover:text-stone-700 transition'
          >
            حساب دارید؟ وارد شوید
          </Link>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
