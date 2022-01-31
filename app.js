const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors())
const PORT = 1337;

const recipes = [
    {
        id: 1234,
        name: 'Chicken Curry'
    },
    {
        id: 1235,
        name: 'Beef Ularthu'
    },
    {
        id: 1236,
        name: 'Pork Stew'
    }
]

app.use(express.json())

app.get('/recipes', (req, res) => {
    return res.status(200).send(recipes)
})

app.get('/recipes/:id', (req, res) => {
    const recipe = recipes.find((r) => r.id == req.params.id)
    if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' })
    }
    return res.status(200).send(recipe)
})

app.post('/recipes', (req, res) => {
    const payload = req.body;
    if (!payload.name) {
        return res.status(400).json({ message: 'Bad request. Recipe name is missing' })
    }

    payload.id = new Date().getTime();
    recipes.push(payload)

    return res.status(201).json(payload)
})

app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
        process.exit(1);
    }
    console.log(`Server running on ${PORT}`)
})