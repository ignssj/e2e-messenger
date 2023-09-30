require('dotenv').config();
import {Secret} from 'jsonwebtoken';

export const dbConfig = {
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
};

export const appConfig = {
    PORT: process.env.PORT
};

export const key: Secret = process.env.SECRET as Secret;