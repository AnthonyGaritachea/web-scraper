const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const newsStories = require('./routes/stories.js');
const scrapeNews = require('./routes/scraper.js');

const PORT = process.env.PORT || 5000;
const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => console.log('mongoose has connected'))

app.use('/stories', newsStories);
app.use('/scraper', scrapeNews);

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));