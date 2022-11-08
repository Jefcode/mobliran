import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { Address } from '../../shared/types';

export interface IUser extends Document {
  email: string;
  password: string;
  username: string;
  address?: Address;
  firstName?: string;
  lastName?: string;
  isAdmin?: boolean;
  token?: string;
  matchPassword: (password: string) => Promise<boolean>;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    firstName: String,
    lastName: String,
    address: {
      country: String,
      city: String,
      address: String,
      postalCode: Number,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});

const userModel = mongoose.model<IUser>('User', userSchema);
export default userModel;
