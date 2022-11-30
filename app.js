const express = require('express');
const app = express();
const layout = require("express-ejs-layouts");
const port = 5000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

app.use('/', (req, res) => {
    res.send("Halaman Tidak Ditemukan");
})

app.listen(port, () => {
    console.log(`localhost:${port}`);
})