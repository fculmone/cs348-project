import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await createConnection();
    const sql = "SELECT * FROM favourite_cities;";
    const [favourite_cities] = await db.query(sql);
    return NextResponse.json(favourite_cities);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to fetch favourite cities" });
  }
}

export async function POST(request) {
    try {
        const data = await request.json();
        const db = await createConnection();
        const sql = "INSERT INTO favourite_cities (username, city_id) VALUES (?, ?)";
        const [response] = await db.query(sql, [data.username, data.city_id]);
        return NextResponse.json(response);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to add city to favourites"})
    }
}

export async function DELETE(request) {
    try {
        const data = await request.json();
        const db = await createConnection();
        const sql = "DELETE FROM favourite_cities WHERE username = ? AND city_id = ?";
        const [response] = await db.query(sql, [data.username, data.city_id]);
        return NextResponse.json(response);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to delete city from favourites"})
    }
}
