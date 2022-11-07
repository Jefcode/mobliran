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
