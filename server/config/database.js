import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();
const database = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialect: "mysql",
  logging: false
});

export default database;
