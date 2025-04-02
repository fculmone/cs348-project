import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const param = searchParams.get("param");

    const allowedColumns = [
      "ranking",
      "city",
      "country",
      "economic_performance",
      "tourism_performance",
      "tourism_policy",
      "tourism_infrastructure",
      "health_safety",
      "sustainability",
    ];

    // Check if the passed column parameter is valid
    if (!allowedColumns.includes(param)) {
      return NextResponse.json(
        { error: "Invalid sort column" },
        { status: 400 }
      );
    }

    // var direction = "";
    // if (param == "city" || param == "country" || param == "ranking") {
    //   direction = "ASC";
    // } else {
    //   direction = "DESC";
    // }

    const db = await createConnection();
    const sql = `SELECT * FROM top100_cities ORDER BY ${param} ASC`;
    const [results] = await db.query(sql, [param]);

    return NextResponse.json(results);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
