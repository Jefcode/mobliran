import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel';

/**
 * @desc    Create a new order
 * @route   POST /api/orders
 * @acess   private
 */
export const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    specialNotes,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  }

  const order = new Order({
    user: req.user._id,
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    specialNotes,
  });

  const createdOrder = await order.save();

  res.status(201).json(createdOrder);
});
