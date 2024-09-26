import { NextResponse, NextRequest } from "next/server";
import cloudinary from "@/libs/cloudinary";
import { processImage } from "@/libs/processImage";
import { conn } from "@/libs/mysql";

export async function GET(request) {
  try {
    const pagination = request.nextUrl.searchParams.get("pagination");
    const keyword = request.nextUrl.searchParams.get("keyword");

    // search results
    if (keyword) {
      const lowerKey = keyword.toLowerCase();
      console.log(lowerKey);

      const queryResults = await conn.query(
        `SELECT * FROM product WHERE LOWER(name) = ? LIMIT 2 OFFSET ?`,
        [lowerKey, Number(pagination)]
      );
      return NextResponse.json(queryResults);
    }
    //catch error
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
