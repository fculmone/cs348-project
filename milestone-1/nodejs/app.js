import express from 'express'
import { getUsers, getOneUser, createUser, deleteAllRows } from './database.js'
import cors from 'cors'

const app = express()

app.use(cors());

app.use(express.json())

app.get("/user", async (req, res) => {
    const user = await getUsers()
    res.send(user)
})

app.get("/user/:username", async (req, res) => {
    const username = req.params.username
    const user = await getOneUser(username)
    res.send(user)
})

app.post("/user", async (req, res) => {
    const {email, password_hash, username} = req.body
    const user = await createUser(email, password_hash, username)
    res.status(201).send({ user })
})

app.delete("/user", async (req, res) => {
    deleteAllRows()
    res.status(204).end();
})

app.listen(8080, () => {
    console.log('Sever is running on port 8080')
})