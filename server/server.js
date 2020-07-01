const express = require('express');

const app = express();

app.get('/scraper', (req, res) => {
    res.json('scraping in progress');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is listening on ${PORT}`));