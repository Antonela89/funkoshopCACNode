require('dotenv').config();

const express = require('express');
const app = express();

PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './src/views');

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', './layouts/public');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//Routes
//entrypoint tienda
app.get('/', (req,res) => {
    res.render('index');
})

app.get('/shop', (req,res)=> {
    res.render('./store/shop');
}) 

app.get('/item', (req,res) => {
    res.render('./store/item');
})

//entrypoint usuario
app.get('/login', (req,res) => {
    res.render('user/login', {title: 'Login', layout: './layouts/admin'})
})

app.get('/register', (req,res) => {
    res.render('user/register', {title: 'Register', layout: './layouts/admin'} )
})

//entrypoint admin
app.get('/admin', (req,res) => {
    res.render('productos/read', {title: 'Admin', layout: './layouts/admin'})
})

app.get('/create', (req,res)=> {
    res.render('productos/create', {title: 'Create', layout: './layouts/admin'})
})


app.listen(PORT, ()=> console.log(`servidor funcionando en http://localhost:${PORT}`))