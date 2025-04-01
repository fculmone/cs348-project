import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const direction = searchParams.get("direction");

    if (direction !== "asc" && direction !== "desc") {
      return NextResponse.json({ error: 'Invalid sort direction' }, { status: 400 });
    }
      
    const db = await createConnection();
    const sql = `SELECT * FROM top100_cities ORDER BY ranking ${direction}`;
    const [results] = await db.query(sql, [direction]);

    return NextResponse.json(results);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}