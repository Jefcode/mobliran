import { axiosInstance, getJWTHeader } from './../axiosInstance/index';
import { Order } from './../../../shared/types';

interface Token {
  token: string;
}

interface IAddOrder extends Token {
  order: Order;
}

class OrderService {
  async addOrder({ order, token }: IAddOrder): Promise<Order> {
    const response = await axiosInstance.post(
      '/orders',
      order,
      getJWTHeader(token)
    );
    return response.data;
  }

  async getMyOrders(token: string): Promise<Order[]> {
    const response = await axiosInstance.get(
      '/orders/myorders',
      getJWTHeader(token)
    );
    return response.data;
  }
}

export default new OrderService();
