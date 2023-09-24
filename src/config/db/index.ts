import mongoose from "mongoose";
const { DB_USER, DB_PASS} = require("../");

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.osg1wuh.mongodb.net/?retryWrites=true&w=majority`);

export default mongoose;