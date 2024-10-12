import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function POST(request) {
  try {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");

    const savedUser = await conn.query(`INSERT INTO estim SET ?`, {
      email,
      password,
    });

    return NextResponse.json({
      savedUser,
    });
  } catch (error) {
    return NextResponse.error(error);
  }
}
