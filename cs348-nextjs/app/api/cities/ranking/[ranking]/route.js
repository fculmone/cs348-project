import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const url = new URL(request.nextUrl);
    const segments = url.pathname.split("/");
    const ranking = segments.pop(); // Get the last part of the URL (ranking)

    const db = await createConnection();
    const sql = "SELECT * FROM top100_cities WHERE ranking = ?";
    const [cities] = await db.query(sql, [ranking]);

    return NextResponse.json(cities);
  } catch (error) {
    console.error("Error fetching city by ranking:", error);
    return NextResponse.json({ error: "Error fetching city by ranking" }, { status: 500 });
  }
}
