import mongoose from 'mongoose';

// db schema definition
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    public_key: {
        type: String,
        required: true,
    }
  },
  { timestamps: true }
);

export { userSchema };
