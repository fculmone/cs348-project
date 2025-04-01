// app/api/most-fav/route.js

import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const db = await createConnection();
    const sql = `
      SELECT *
      FROM most_favourited_cities
      ORDER BY total_favourites DESC
      LIMIT 10
    `;
    const [rows] = await db.query(sql);
    
    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch top-favourited cities" });
  }
}
