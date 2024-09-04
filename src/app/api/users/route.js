import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET(request) {
  try {
    const email = request.nextUrl.searchParams.get("email");
    console.log(email);

    const result = await conn.query(
      `SELECT name, email, number_phone, description, createdAt FROM user WHERE email = ?`,
      [email]
    );

    if (result.length === 0) {
      return NextResponse.json(
        {
          message: "No estas logeado",
        },
        {
          status: 404,
        }
      );
    }
    console.log(result[0][0]);
    return NextResponse.json(result[0][0]);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
