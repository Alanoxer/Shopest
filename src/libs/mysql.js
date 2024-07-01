import mysql from "mysql2/promise";

export const conn = await mysql.createConnection({
  host: "shopestdb.crwsssa8k56d.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "polaco12",
  port: parseInt(3306),
  database: "shopestdb",
});
