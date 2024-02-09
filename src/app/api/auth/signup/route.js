import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db, sql } from "@vercel/postgres";

export async function POST(request) {
  try {
    const client = await db.connect();
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
    const name = data.get("fullname");
    const email = data.get("email");
    const password = data.get("password");

    const hashedPassword = await bcrypt.hash(data.get("password"), 12);

    const savedUser =
      await client.sql`INSERT INTO users (user_name, user_email, user_password) 
      VALUES(
    "${name}",
    "${email}",
    "${password}",
            )
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
