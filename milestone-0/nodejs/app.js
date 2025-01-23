import express from 'express'
import { getPeople, getPerson, createPerson, deleteAllRows } from './database.js'
import cors from 'cors'

const app = express()

app.use(cors());

app.use(express.json())

app.get("/people", async (req, res) => {
    const people = await getPeople()
    res.send(people)
})

app.get("/people/:id", async (req, res) => {
    const id = req.params.id
    const person = await getPerson(id)
    res.send(person)
})

app.post("/people", async (req, res) => {
    const {firstName, lastName, age} = req.body
    const id = await createPerson(firstName, lastName, age)
    res.status(201).send({ id })
})

app.delete("/people", async (req, res) => {
    deleteAllRows()
    res.status(204).end();
})

app.listen(8080, () => {
    console.log('Sever is running on port 8080')
})