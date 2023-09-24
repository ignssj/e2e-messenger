require('dotenv').config();

export const dbConfig = {
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
};

export const appConfig = {
    PORT: process.env.PORT
};
