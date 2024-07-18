import express from 'express';

const port = 8080;
const app = express();

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    res.send("POST /tacos response")
})

app.listen(port, () => {
    console.log(`On port ${port}`);
})