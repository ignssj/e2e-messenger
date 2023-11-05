import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    userid: {
        type: String,
        required: true,
    },
    contact_userid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    publicKey: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

export { contactSchema };
