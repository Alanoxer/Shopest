import { NextResponse, NextRequest } from "next/server";
import cloudinary from "@/libs/cloudinary";
import { processImage } from "@/libs/processImage";
import { conn } from "@/libs/mysql";

export async function GET(request) {
  try {
    const pagination = request.nextUrl.searchParams.get("pagination");
    const keyword = request.nextUrl.searchParams.get("keyword");
    const limit = request.nextUrl.searchParams.get("limit");
    const types = request.nextUrl.searchParams.get("types");
    const subtype = request.nextUrl.searchParams.get("subtype");

    // types
    if (types) {
      const typeResults = await conn.query(
        `SELECT * FROM product WHERE type = ? LIMIT 1 OFFSET ?;`,
        [types, pagination * 2]
      );
      return NextResponse.json(typeResults);
    }

    //sutypes
    else if (subtype) {
      const subtypeResults = await conn.query(
        `SELECT * FROM product WHERE subtype = ? LIMIT 1 OFFSET ?;`,
        [subtype, pagination * 2]
      );
      return NextResponse.json(subtypeResults);
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
      const lowerKey = keyword.toLowerCase();
      console.log(keyword);

      const queryResults = await conn.query(
        `SELECT * FROM product WHERE LOWER(name) = "?"`,
        [keyword]
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
