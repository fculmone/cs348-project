import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const city_id = searchParams.get("city_id")
        const db = await createConnection();
        const sql = "SELECT * FROM reviews WHERE city_id = ?";
        const [ reviews ] = await db.query(sql, [city_id]);
        return NextResponse.json(reviews);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to fetch reviews."})
    }
}

export async function POST(request) {
    try {
        const { city_id, username, rating, review_text } = await request.json();
        const db = await createConnection();
        const sql = "INSERT INTO reviews (city_id, username, rating, review_text) VALUES (?, ?, ?, ?)";
        const [response] = await db.query(sql, [city_id, username, rating, review_text]);
        return NextResponse.json(response);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to add review."})
    }
}

export async function PUT(request) {
    try {
        const { searchParams } = new URL(request.url);
        const review_id = searchParams.get("review_id")
        const new_text = searchParams.get("new_text")
        const new_rating = searchParams.get("new_rating")
        const db = await createConnection();
        const sql = "UPDATE reviews SET rating = ?, review_text = ? WHERE review_id = ?;";
        const [ response ] = await db.query(sql, [new_rating, new_text, review_id]);
        return NextResponse.json(response);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to edit review."})
    }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const review_id = searchParams.get("review_id")
        const db = await createConnection();
        const sql = "DELETE FROM reviews WHERE review_id = ?";
        const [ response ] = await db.query(sql, [review_id]);
        return NextResponse.json(response);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to delete review."})
    }
}


