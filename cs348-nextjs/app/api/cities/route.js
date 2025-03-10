import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await createConnection();
    const sql = "SELECT * FROM top100_cities ORDER BY ranking;";
    const [cities] = await db.query(sql);
    return NextResponse.json(cities);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
