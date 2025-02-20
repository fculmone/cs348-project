import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await createConnection();
    const sql = "SELECT * FROM user;";
    const [users] = await db.query(sql);

    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const db = await createConnection();
    const sql = `INSERT INTO USER (username, password, pfp) 
    VALUES ('${data.username}', '${data.password}', '${data.pfp}');`;
    const [response] = await db.query(sql);

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
