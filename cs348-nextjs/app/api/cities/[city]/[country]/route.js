import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  try {
    const { params } = context;
    const city = params.city;
    const country = params.country;
    const db = await createConnection();
    const sql = `SELECT * FROM top100_cities WHERE city = '${city}' AND country = '${country}';`;
    const [cities] = await db.query(sql);

    return NextResponse.json(cities);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
