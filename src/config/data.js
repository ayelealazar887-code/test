import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { pool } = pkg;

const pool = new pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DBPORT,
});

pool.on("connect", () => {
  console.log("Connected to the database");
});

export default pool;