import express from 'express';

const port = 8080;
const app = express();

app.get('/tacos', (req, rest) => {
    res.send("GET /tacos response")
})

app.listen(port, () => {
    console.log(`On port ${port}`);
})