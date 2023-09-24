import mongoose from 'mongoose';
import userSchema from './user-schema';

const User = mongoose.model('users', userSchema);

export default User;
