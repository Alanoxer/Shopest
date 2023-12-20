import mysql from "serverless-mysql"

export const connection = mysql({
    config: {
        host: "localhost",
        user: "root",
        password: "Polaco12",
        port: 3306,
        database: "nextmysql",
    }
})