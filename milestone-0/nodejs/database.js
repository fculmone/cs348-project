import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
}).promise()

export async function getPeople() {
    const [rows] = await pool.query("SELECT * FROM test")
    return rows
}

export async function getPerson(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM test
    WHERE id = ? 
    `, [id])
    return rows[0]
}

export async function createPerson(firstName, lastName, age) {
    const [result] = await pool.query(`
    INSERT INTO test (first_name, last_name, age)
    VALUES(?, ?, ?)
    `, [firstName, lastName, age])
    console.log(result.insertId)
    return result.insertId
}

export async function deleteAllRows() {
    const [result] = await pool.query(`
    DELETE FROM test
    `)
    return 0
}