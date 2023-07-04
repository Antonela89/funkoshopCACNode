require('dotenv').config();

const express = require('express');
const app = express();

PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.render('index');
})

app.listen(PORT, ()=> console.log(`servidor funcionando en http://localhost:${PORT}`))