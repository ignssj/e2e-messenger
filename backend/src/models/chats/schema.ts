import mongoose from 'mongoose';

// db schema definition
const chatSchema = new mongoose.Schema(
  {
    userOne: {
      type: String,
      required: true,
    },
    userTwo: {
        type: String,
        required: true,
    },
    lastMessage: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

export { chatSchema };
