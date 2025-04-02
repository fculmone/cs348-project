import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  try {
    const { params } = context;
    const { city } = await params;
    const { country } = await params;
    const db = await createConnection();
    const sql = `SELECT top100_cities.city AS city, top100_cities.country as country, ranking,
                temperature_celsius, wind_speed_ms, top100_cities_weather.description as weather_desc, top100_cities.description AS city_desc,
                economic_performance, tourism_performance, tourism_policy, tourism_infrastructure, health_safety
                FROM top100_cities JOIN top100_cities_weather 
                ON top100_cities.city=top100_cities_weather.city
                    WHERE top100_cities.city = '${city}' AND top100_cities.country = '${country}';`;
    const [weather] = await db.query(sql);

    return NextResponse.json(weather);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
