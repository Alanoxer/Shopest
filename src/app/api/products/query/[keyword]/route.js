import { NextResponse, NextRequest } from "next/server";
import cloudinary from "@/libs/cloudinary";
import { processImage } from "@/libs/processImage";
import { conn } from "@/libs/mysql";

export async function GET(request, { params }) {
  try {
    const keyword = params.keyword;
    console.log(keyword);
    const pagination = request.nextUrl.searchParams.get("pagination");

    // search results
    if (keyword) {
      const lowerKey = keyword.toLowerCase();
      console.log(lowerKey);

      const queryResults = await conn.query(
        `SELECT * FROM product WHERE LOWER(name) = %?% LIMIT 2 OFFSET ?`,
        [lowerKey, pagination]
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
