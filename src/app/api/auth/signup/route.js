import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@vercel/postgres";

export async function POST(request) {
  try {
    const client = await db.connect();
    await client.sql`CREATE TABLE IF NOT EXISTS user(
        user_id SERIAL PRIMARY KEY ,
        user_name VARCHAR(200) NOT NULL  ,
        user_email VARCHAR(320) NOT NULL  ,
        user_password VARCHAR(60) NOT NULL  ,
        created_at TIMESTAMP NOT NULL);`;

    const data = await request.formData();

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

    const hashedPassword = await bcrypt.hash(password, 12);

    const savedUser =
      await client.sql`INSERT INTO user (user_name, user_email, user_password) VALUES(
    ${data.get("fullname")},
    ${data.get("email")},
    ${hashedPassword})
    `;
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
