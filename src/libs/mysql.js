import mysql from "serverless-mysql";

const { HOST_SQL, USER_SQL, PASSWORD_SQL, PORT_SQL, DATABASE_SQL } =
  process.env;

export const connection = mysql({
  config: {
    host: HOST_SQL,
    user: USER_SQL,
    password: PASSWORD_SQL,
    port: PORT_SQL,
    database: DATABASE_SQL,
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  },
});
