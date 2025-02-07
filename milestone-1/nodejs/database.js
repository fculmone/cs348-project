import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
}).promise()

export async function getUsers() {
    const [rows] = await pool.query("SELECT * FROM user")
    return rows
}

export async function getOneUser(username) {
    const [rows] = await pool.query(`
    SELECT *
    FROM user
    WHERE username = ? 
    `, [username])
    return rows[0]
}

export async function createUser(email, password_hash, username) {
    const [result] = await pool.query(`
    INSERT INTO user (email, password_hash, username)
    VALUES(?, ?, ?)
    `, [email, password_hash, username])
    console.log(result.username)
    return result.username
}

export async function deleteAllRows() {
    const [result] = await pool.query(`
    DELETE FROM user
    `)
    return 0
}