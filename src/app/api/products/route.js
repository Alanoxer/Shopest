import { NextResponse, NextRequest } from "next/server";
import cloudinary from "@/libs/cloudinary";
import { processImage } from "@/libs/processImage";
import { conn } from "@/libs/mysql";

export async function GET(request) {
  try {
    const pagination = request.nextUrl.searchParams.get("pagination");
    const limit = request.nextUrl.searchParams.get("limit");
    const types = request.nextUrl.searchParams.get("types");
    const subtype = request.nextUrl.searchParams.get("subtype");
    const email = request.nextUrl.searchParams.get("email");
    const state = request.nextUrl.searchParams.get("state");
    const id = request.nextUrl.searchParams.get("id");
    const query = request.nextUrl.searchParams.get("query");

    //home page
    if (limit) {
      const homeResults = await conn.query(`SELECT * FROM product LIMIT ?`, [
        Number(limit),
      ]);
      return NextResponse.json(homeResults);
    }

    //marketplace(all)
    else if (state) {
      if (state != "cualquiera") {
        const results = await conn.query(
          `SELECT * FROM product WHERE state = ? LIMIT 2 OFFSET ?`,
          [state, pagination * 2]
        );
        return NextResponse.json(results);
      } else {
        const results = await conn.query(
          `SELECT * FROM product LIMIT 2 OFFSET ?`,
          [pagination * 2]
        );
        return NextResponse.json(results);
      }
    }

    //id product
    else if (id) {
      const idResult = await conn.query(`SELECT * FROM product WHERE id = ?`, [
        id,
      ]);
      return NextResponse.json(idResult[0][0]);
    }

    //query
    else if (query) {
      if (state != "cualquiera") {
        const queryResults = await conn.query(
          `SELECT * FROM product WHERE name LIKE ? AND state = ? LIMIT 2 OFFSET ?`,
          [query, state, pagination * 2]
        );
        return NextResponse.json(queryResults);
      } else {
        const queryResults = await conn.query(
          `SELECT * FROM product WHERE name LIKE ? LIMIT 2 OFFSET ?`,
          [query, pagination * 2]
        );
        return NextResponse.json(queryResults);
      }
    }

    // user products
    else if (email) {
      const userResults = await conn.query(
        `SELECT * FROM product WHERE user = ?`,
        [email]
      );
      return NextResponse.json(userResults[0]);
    }

    // types
    else if (types) {
      if (state != "cualquiera") {
        const results = await conn.query(
          `SELECT * FROM product WHERE type = ? AND state = ? LIMIT 2 OFFSET ?`,
          [types, state, pagination * 2]
        );
        return NextResponse.json(results);
      } else {
        const results = await conn.query(
          `SELECT * FROM product WHERE type = ? LIMIT 2 OFFSET ?`,
          [types, pagination * 2]
        );
        return NextResponse.json(results);
      }
    }

    //sutypes
    else if (subtype) {
      if (state != "cualquiera") {
        const results = await conn.query(
          `SELECT * FROM product WHERE subtype = ? AND state = ? LIMIT 2 OFFSET ?`,
          [subtype, state, pagination * 2]
        );
        return NextResponse.json(results);
      } else {
        const results = await conn.query(
          `SELECT * FROM product WHERE subtype = ? LIMIT 2 OFFSET ?`,
          [subtype, pagination * 2]
        );
        return NextResponse.json(results);
      }
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
      user: data.get("user"),
      image: res.secure_url,
    });

    return NextResponse.json({
      name: data.get("name"),
      price: data.get("price"),
      description: data.get("description"),
      state: data.get("state"),
      type: data.get("type"),
      subtype: data.get("subtype"),
      user: data.get("user"),
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
