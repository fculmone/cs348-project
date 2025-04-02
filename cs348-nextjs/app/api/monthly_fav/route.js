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

        const insertSQL = `
        INSERT INTO most_favourited (city_id, city_name, country, total_favourites, last_updated)
        SELECT
            t.ranking AS city_id,   
            t.city AS city_name,
            t.country AS country,
            COUNT(fc.username) AS total_favourites,
            NOW() AS last_updated
        FROM
            favourite_cities fc
        JOIN
            top100_cities t ON fc.city_id = t.ranking 
        GROUP BY
            t.ranking, t.city, t.country
        HAVING city_id NOT IN (SELECT city_id FROM most_favourited);

        `;

        await db.query(insertSQL);

        const updateSQL = `
        UPDATE most_favourited mf
        JOIN (
            SELECT
                t.ranking AS city_id,   
                COUNT(fc.username) AS total_favourites
            FROM
                favourite_cities fc
            JOIN
                top100_cities t ON fc.city_id = t.ranking 
            GROUP BY
                t.ranking
        ) temp ON mf.city_id = temp.city_id
        SET
            mf.total_favourites = temp.total_favourites,
            mf.last_updated = NOW();
        `
        await db.query(updateSQL);

        return NextResponse.json(rows);
    } catch (error) {
        console.error("Error updating most_favourited:", error);
        return NextResponse.json({ error: "failed" });
    }
}