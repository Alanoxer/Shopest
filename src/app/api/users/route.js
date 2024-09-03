import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET(request, { params }) {
  try {
    const email = request.nextUrl.searchParams.get("email");
    console.log(params.email);

    const result = await conn.query(`SELECT * FROM user WHERE email = ?`, [
      email,
    ]);

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
    console.log(result[0]);
    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
