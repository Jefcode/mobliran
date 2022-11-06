import * as yup from 'yup';

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email('لطفا یک ایمیل معتبر وارد کنید')
      .required('این فیلد الزامی است'),
    password: yup
      .string()
      .min(6, 'رمز عبور حداقل باید 6 رقم باشد')
      .required('این فیلد الزامی است'),
  })
  .required();

export const registerSchema = yup.object({
  username: yup.string().required('این فیلد الزامی است'),
  email: yup
    .string()
    .email('لطفا یک ایمیل معتبر وارد کنید')
    .required('این فیلد الزامی است'),
  password: yup
    .string()
    .min(6, 'رمز عبور حداقل باید 6 رقم باشد')
    .required('این فیلد الزامی است'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'رمز ها یکسان نیستند')
    .required('این فیلد الزامی است'),
});
