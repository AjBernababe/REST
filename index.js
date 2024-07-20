import express from 'express';
import path from 'path';
import characters from './data/charactersData.js';
import addID from './helper/helper.js';

//Variables for current Path
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//EJS Set up
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

//Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// #region Routes
//Show all characters
app.get('/characters', (req, res) => {
    res.render('characters/index', { characters })
})

//New character form
app.get('/characters/new', (req, res) => {
    res.render('characters/new')
})

//Adds the new character and redirects to all characters
app.post('/characters', (req, res) => {
    const { hero, voiceline } = req.body
    if (hero !== '' && voiceline !== '') {
        //add ID property
        const char = { hero, voiceline }
        addID(char);
        characters.push(char)
    }
    res.redirect('/characters');
})

//Show specific character
app.get('/characters/:id', (req, res) => {
    const { id } = req.params
    const character = characters.find(char => char.id == id)
    res.render('characters/show', { character })
})
// #endregion

//Port
app.listen(8080, () => {
    console.log(`On port 8080`);
})