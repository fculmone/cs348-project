import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  try {
    const { params } = context;
    const username = params.username;
    const db = await createConnection();
    const sql = `SELECT * FROM user WHERE username = '${username}';`;
    const [users] = await db.query(sql);

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
