import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { conn } from "@/libs/mysql";

export async function POST(request) {
  try {
    await conn.query(`CREATE TABLE IF NOT EXISTS user (user_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY ,
      user_name VARCHAR(200) NOT NULL UNIQUE ,
      user_email VARCHAR(320) NOT NULL UNIQUE ,
      user_password VARCHAR(60) NOT NULL UNIQUE ,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`);
    const data = await request.formData();

    const name = data.get("fullname");
    const email = data.get("email");
    const password = data.get("password");

    // const password = data.get("password");
    // if (password < 6)
    //   return NextResponse.json(
    //     { message: "Password must be at least 6 characters" },
    //     { status: 400 }
    //   );

    // const email = data.get("email");
    // const userFound =
    //   await sql`SELECT user_email FROM users WHERE user_email = ${email}`;
    // console.log(userFound);

    // if (userFound === email)
    //   return NextResponse.json(
    //     {
    //       message: "Email already exists",
    //     },
    //     {
    //       status: 409,
    //     }
    //   );

    console.log(name, email, password);

    const hashedPassword = await bcrypt.hash(password, 12);

    const [savedUser] = await conn.query(`INSERT INTO user SET ?`, {
      user_name: name,
      user_email: email,
      user_password: `${hashedPassword}`,
    });
    console.log(savedUser);

    return NextResponse.json({
      name: data.get("fullname"),
      email: data.get("email"),
      id: savedUser.insertId,
    });
  } catch (error) {
    return NextResponse.error(error);
  }
}
