import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from './config/db/';
import routers from './routes';

dotenv.config();

var db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error:'));
db.once("open", function () {
  console.log('database connection succeeded');
});
 
const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/api", routers);

export default app;