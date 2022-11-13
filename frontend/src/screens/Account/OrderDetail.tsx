import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { authSelector } from '../../features/auth/authSlice';
import { queryKeys } from '../../react-query/constants';
import OrderService from '../../services/OrderService';

const OrderDetail = () => {
  const params = useParams();
  const { id: orderId } = params;
  const {
    user: { token },
  } = useSelector(authSelector);
  const { data, isLoading, isSuccess } = useQuery(
    [queryKeys.order, orderId],
    () =>
      OrderService.getOrderById({ token: token ?? '', id: orderId as string })
  );

  console.log(data);

  return <div>OrderDetail</div>;
};

export default OrderDetail;
