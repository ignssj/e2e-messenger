import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
      required: true,
    },
    receiver: {
      type: String,
      required: true,
    },
    payload: {
        type: String,
        require: true,
    }
  },
  { timestamps: true }
);

export { messageSchema };
