import { NextResponse, NextRequest } from "next/server";
import cloudinary from "@/libs/cloudinary";
import { processImage } from "@/libs/processImage";
import { conn } from "@/libs/mysql";

export async function GET(request) {
  try {
    const pagination = request.nextUrl.searchParams.get("pagination");
    const keyword = request.nextUrl.searchParams.get("keyword");
    const limit = request.nextUrl.searchParams.get("limit");
    const type = request.nextUrl.searchParams.get("type");
    console.log(type);

    // types and subtypes
    if (type) {
      const typeResults = await conn.query(
        `SELECT * FROM product WHERE type LIKE ? LIMIT 3 OFFSET ?`,
        [type, pagination * 2]
      );
      return NextResponse.json(typeResults);
    }

    //home page
    else if (limit) {
      const homeResults = await conn.query(`SELECT * FROM product LIMIT ?`, [
        Number(limit),
      ]);
      return NextResponse.json(homeResults);
    }

    // search results
    else if (keyword) {
      const queryResults = await conn.query(
        `SELECT * FROM product WHERE name LIKE "%?%"  LIMIT 2 OFFSET ?`,
        [keyword, pagination * 2]
      );
      return NextResponse.json(queryResults);
    }

    //marketplace(all)
    else {
      const results = await conn.query(
        `SELECT * FROM product LIMIT 2 OFFSET ?`,
        [pagination * 2]
      );
      return NextResponse.json(results);
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

export async function POST(request) {
  try {
    const data = await request.formData();
    const image = data.get("image");

    if (!data.get("name")) {
      return NextResponse.json(
        {
          message: "Name is required",
        },
        {
          status: 400,
        }
      );
    }

    if (!image) {
      return NextResponse.json(
        {
          message: "Image is required",
        },
        {
          status: 400,
        }
      );
    }

    const buffer = await processImage(image);

    const res = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "image",
          },
          async (err, result) => {
            if (err) {
              console.log(err);
              reject(err);
            }

            resolve(result);
          }
        )
        .end(buffer);
    });

    const result = await conn.query("INSERT INTO product SET ?", {
      name: data.get("name"),
      description: data.get("description"),
      price: data.get("price"),
      state: data.get("state"),
      type: data.get("type"),
      subtype: data.get("subtype"),
      image: res.secure_url,
    });

    return NextResponse.json({
      name: data.get("name"),
      price: data.get("price"),
      description: data.get("description"),
      state: data.get("state"),
      type: data.get("type"),
      subtype: data.get("subtype"),
      id: result.insertId,
    });
  } catch (error) {
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
