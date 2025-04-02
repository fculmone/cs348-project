import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  try {
    const { params } = context;
    const { city } = await params;
    const { country } = await params;
    const db = await createConnection();
    const sql = `SELECT city, country, temperature_celsius, wind_speed_ms, top100_cities_weather.description
                    FROM top100_cities_weather
                    WHERE city = '${city}' AND country = '${country}';`;
    const [weather] = await db.query(sql);

    console.log(weather);

    return NextResponse.json(weather);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
