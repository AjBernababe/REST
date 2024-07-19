import express from 'express';
import characters from './data/charactersData.js';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Get & Post
app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Heres your ${meat} with a quantity of ${qty}`)
})

//REST (CRUD)
app.get('/characters', (req, res) => {
    res.render('characters/index', { characters })
})
app.post('/characters', (req, res) => {
    console.log(JSON.stringify(req.body))
    JSON.stringify(req.body) !== '{"hero":"","voiceline":""}' && characters.push(req.body)
    res.redirect('/characters');
})

app.get('/characters/new', (req, res) => {
    res.render('characters/new')
})

app.get('/characters/:hero', (req, res) => {
    const character = []
    character.push(characters.find(obj =>
        Object.values(obj).includes(req.params.hero)
    )
    )
    console.log(character.length)
    character[0] &&
        res.render('characters/index', { characters: character })
    res.redirect('/characters');
})

app.listen(port, () => {
    console.log(`On port ${port}`);
})