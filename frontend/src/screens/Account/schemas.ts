import * as yup from 'yup';

const requiredMessage = 'این فیلد الزامی است';

export const editAddressFormSchema = yup.object({
  country: yup.string().required(requiredMessage),
  city: yup.string().required(requiredMessage),
  address: yup.string().required(requiredMessage),
  postalCode: yup
    .number()
    .required(requiredMessage)
    .typeError('مقدار این فیلد باید یک عدد باشد'),
});
