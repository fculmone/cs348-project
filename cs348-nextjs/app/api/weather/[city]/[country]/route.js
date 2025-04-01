import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  try {
    const { params } = context;
    const { city } = await params;
    const { country } = await params;
    const db = await createConnection();
    const sql = `SELECT top100_cities.city AS city, top100_cities.country as country,
                        temperature_celsius, wind_speed_ms, top100_cities_weather.description
                    FROM top100_cities JOIN top100_cities_weather 
                    ON top100_cities.city=top100_cities_weather.city
                    WHERE top100_cities.city = '${city}' AND top100_cities.country = '${country}';`;
    const [weather] = await db.query(sql);

    console.log(weather);

    return NextResponse.json(weather);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
