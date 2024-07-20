import express from 'express';
import characters from './data/charactersData.js';
import addID from './helper/helper.js';
import path from 'path';

//Variables for current Path
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//EJS Set up
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
        //add ID
        let char = { hero, voiceline }
        addID(char);
        characters.push(char)
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

app.listen(8080, () => {
    console.log(`On port 8080`);
})