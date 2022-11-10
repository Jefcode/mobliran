import { CartItem } from './../../shared/types';
import asyncHandler from 'express-async-handler';

import User from '../models/userModel';
import generateToken from '../utils/generateToken';

/**
 * @desc    Register a new User
 * @route   POS /api/usersT
 * @acess   Public
 */
export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Validate
  if (!username || !email || !password) {
    res.status(400);
    throw new Error('اطلاعات لازم دریافت نشد');
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('کاربری با این ایمیل از قبل وجود دارد');
  }

  // Create user
  const user = await User.create({ username, email, password });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      address: user.address,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error('اطلاعات وارد شده اشتباه است');
  }
});

/**
 * @desc    Auth user & get token
 * @route   POST /api/users/login
 * @acess   Public
 */
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      address: user.address,
      token: generateToken(user.id),
    });
  } else {
    res.status(401);
    throw new Error('رمز عبور یا ایمیل اشتباه است');
  }
});

/**
 * @desc    Get user profile
 * @route   GET /api/users/profile
 * @acess   Private
 */
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = req.user;

  res.json(user);
});

/**
 * @desc    Update User Address
 * @route   PUT /api/users/profile/address
 * @acess   Private
 */
export const updateUserAddress = asyncHandler(async (req, res) => {
  const { country, city, address, postalCode } = req.body;

  // Validate
  if (!country || !city || !address || !postalCode) {
    res.status(400);
    throw new Error('تمام اطلاعات مورد نیاز ارسال نشد.');
  }

  try {
    req.user.address = {
      country,
      city,
      address,
      postalCode,
    };

    const updatedUser = await req.user.save();

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      username: updatedUser.username,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      address: updatedUser.address,
      token: generateToken(updatedUser.id),
    });
  } catch (error) {
    res.status(400);
    throw new Error('اطلاعات وارد شده اشتباه است');
  }
});

/**
 * @desc    Update User Address
 * @route   PUT /api/users/profile
 * @acess   Private
 */
export const updateUserProfile = asyncHandler(async (req, res) => {
  const { firstName, lastName, username, email, oldPassword, newPassword } =
    req.body;

  // Validation
  if (!firstName || !lastName || !username || !email) {
    res.status(400);
    throw new Error('اطلاعات فرستاده شده کامل نیست');
  }

  const user = (await User.findById(req.user.id)) || req.user;

  user.firstName = firstName;
  user.lastName = lastName;
  user.username = username;
  user.email = email;

  // Check for existance of password
  if (oldPassword && newPassword) {
    if (await user.matchPassword(oldPassword)) {
      user.password = newPassword;
    } else {
      res.status(400);
      throw new Error('رمز کنونی اشتباه وارد شده است');
    }
  }

  const updatedUser = await user.save();
  res.json({
    _id: updatedUser._id,
    firstName: updatedUser.firstName,
    lastName: updatedUser.lastName,
    username: updatedUser.username,
    email: updatedUser.email,
    isAdmin: updatedUser.isAdmin,
    address: updatedUser.address,
    token: generateToken(updatedUser.id),
  });
});

/**
 * @desc    Add Product to Cart
 * @route   POST /api/users/cart
 * @acess   Private
 */
export const addToCart = asyncHandler(async (req, res) => {
  const user: any = req.user;

  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    res.status(400);
    throw new Error('اطلاعات به درستی ارسال نشده است');
  }

  // Check if product exist in cart
  const existingItem = user.cart.find(
    (p: CartItem) => p.product.toString() === productId
  );

  if (existingItem) {
    user.cart = user.cart.map((p: CartItem) => {
      return p.product.toString() === productId
        ? { ...p, quantity: p.quantity + Number(quantity) }
        : p;
    });
  } else {
    user.cart.push({ product: productId, quantity: Number(quantity) });
  }

  const updatedUser = await user.save();

  res.status(200).json(updatedUser);
});
