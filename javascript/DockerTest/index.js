import express from 'express'
import mongoose from 'mongoose'

const animal = mongoose.model('Animal', new mongoose.Schema({
    tipo: String,
    estado: String,
}))

const app = express()

const user = 'elmer'
const password = 'pocho'
const port = '27017'
const host = 'monguito' // this is container's name, locally can be localhost
const database = 'miapp'
const parameters = 'authSource=admin'

mongoose.connect(`mongodb://${user}:${password}@${host}:${port}/${database}?${parameters}`)

app.get('/', async (_req, res) => {
    console.log('listando...')
    const animales = await animal.find()
    return res.send(animales)
})

app.get('/crear', async (_req, res) => {
    console.log('creando...')
    await animal.create({ tipo: 'Chanchito', estado: 'Feliz' })
    return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))