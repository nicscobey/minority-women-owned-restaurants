const express = require('express');
const app = express();
const port = 3000;

const restaurants = require('./models/restaurants');

app.get('/', (req, res) => {
    // res.send('Hey!');
    res.render('index.ejs')
})

app.get('/searchresults', (req, res) => {
    res.render('restaurant_index.ejs', { results: restaurants });
})

app.listen(port, () => {
    console.log('minority-owned business listening at ', port);
})