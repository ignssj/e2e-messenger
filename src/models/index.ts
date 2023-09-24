import mongoose from 'mongoose';
import User from './users'; // Suponho que seu modelo seja definido em 'user.js'

mongoose.Promise = global.Promise;

const db = {
  mongoose: mongoose,
  user: User 
};

export default db;
