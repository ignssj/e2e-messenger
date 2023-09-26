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
 
const server = express();
server.use(morgan('tiny'));
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use("/api", routers);

export default server;