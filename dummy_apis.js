const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors())
const PORT = 1337;

app.get('/', (req, res) => {
    const html = `<h1>This is the index route!</h1>`
    res.status(200).send(html)
})

app.get('/api', (req, res) => {
    const json = { message: 'get api endpoint' }
    res.status(200).send(json)
})

app.post('/api', (req, res) => {
    const json = { message: 'post api endpoint' }
    res.status(200).send(json)
})

app.put('/api', (req, res) => {
    const json = { message: 'put api endpoint' }
    res.status(200).send(json)
})

app.delete('/api', (req, res) => {
    const json = { message: 'delete api endpoint' }
    res.status(200).send(json)
})

app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
        process.exit(1);
    }
    console.log(`Server running on ${PORT}`)
})