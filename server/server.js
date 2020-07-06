const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const scrapeNews = require('./scraper.js');

const PORT = process.env.PORT || 5000;
const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => console.log('mongoose has connected'))

app.get('/scraper', async (req, res) => {
    try {
        const data = await scrapeNews();
        res.json(data);
    } catch(err){
        console.log(err)
    }
});

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));