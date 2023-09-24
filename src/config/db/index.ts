import mongoose from 'mongoose';
import { dbConfig } from '../';

const {DB_PASS, DB_USER} = dbConfig;
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.osg1wuh.mongodb.net/?retryWrites=true&w=majority`);

export default mongoose;