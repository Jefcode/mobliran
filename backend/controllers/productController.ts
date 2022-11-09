import asyncHandler from 'express-async-handler';

import Product from '../models/productModel';

/**
 * @desc    fetch all products
 * @route   GET /api/products
 * @acess   public
 */
export const getAllProducts = asyncHandler(async (req, res) => {
  const { category, sortBy } = req.query;

  let options: { sort?: any } = {};

  switch (sortBy) {
    case 'popularity':
      options.sort = {
        rating: -1,
      };
      break;

    case 'ASC':
      options.sort = {
        price: 1,
      };
      break;

    case 'DESC':
      options.sort = {
        price: -1,
      };
      break;

    default:
      options.sort = {
        createdAt: -1,
      };
      break;
  }

  let products;

  if (category === 'all') {
    products = await Product.find({}, {}, options);
  } else {
    products = await Product.find({ categories: category }, {}, options);
  }

  res.json(products);
});

/**
 * @desc    fetch a single product by id
 * @route   GET /api/products/:id
 * @acess   public
 */
export const getProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId).populate('categories');

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404);
      throw new Error('محصول یافت نشد');
    }
  } catch (error) {
    res.status(404);
    throw new Error('خطایی رخ داده است.');
  }
});
