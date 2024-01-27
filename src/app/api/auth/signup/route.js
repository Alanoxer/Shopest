import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connection } from "@/libs/mysql";

export async function POST(request) {
  try {
    const data = await request.formData();

    if (data.get("password") < 6)
      return NextResponse.json(
        { message: "Password must be at least 6 characters" },
        { status: 400 }
      );
    // const email = data.get("email");
    // const userFound = await connection.query(
    //   "SELECT user_email FROM users WHERE user_email = ?",
    //   [email]
    // );
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

    const password = data.get("password");

    const hashedPassword = await bcrypt.hash(password, 12);

    const savedUser = await connection.query("INSERT INTO users SET ?", {
      user_name: data.get("fullname"),
      user_email: data.get("email"),
      user_password: hashedPassword,
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
