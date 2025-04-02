import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const db = await createConnection();

        const fetchSql = `
            SELECT city_id, city_name, country, total_favourites, last_updated
            FROM most_favourited
            ORDER BY total_favourites DESC
        `;
        const [rows] = await db.query(fetchSql);

        const updateSql = `
        UPDATE most_favourited mf
        JOIN (
            SELECT 
                t.ranking AS city_id, 
                COUNT(fc.username) AS total_favourites,
                NOW() AS last_updated
            FROM top100_cities t
            LEFT JOIN favourite_cities fc ON fc.city_id = t.ranking
            GROUP BY t.ranking
        ) temp ON mf.city_id = temp.city_id
        SET mf.total_favourites = temp.total_favourites, mf.last_updated = temp.last_updated;
        `;
        await db.query(updateSql);

        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({ error: "failed" });
    }
}
