const mongoose = require("mongoose");
const schemaType = require("../../types");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: schemaType.TypeString,
      required: true,
    },
    password: {
      type: schemaType.TypeString,
      required: true,
    }
  },
  { timestamps: true }
);

export default userSchema;
