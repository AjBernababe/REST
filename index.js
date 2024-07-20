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

//REST (CRUD)
app.get('/characters', (req, res) => {
    res.render('characters/index', { characters })
})
app.post('/characters', (req, res) => {
    if (JSON.stringify(req.body) !== '{"hero":"","voiceline":""}') {
        const { hero, voiceline } = req.body
        const id = characters.length + 1
        characters.push({ id, hero, voiceline })
    }
    res.redirect('/characters');
})

app.get('/characters/new', (req, res) => {
    res.render('characters/new')
})

app.get('/characters/:id', (req, res) => {
    const { id } = req.params
    const character = characters.find(char => char.id == id)
    res.render('characters/show', { character })
})

app.listen(port, () => {
    console.log(`On port ${port}`);
})