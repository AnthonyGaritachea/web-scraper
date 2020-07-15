const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

const Story = require('../models/Story.js');

const scrapeNews = async () => {
    try {
        const html = await axios.get(`${process.env.NEWS_URL}`);
        const { data } = await html;
        let $ =  cheerio.load(data);

        let newsData = [];
        
        // iterating through parent element
        $('section.river-item.featured-post').each((index, element) => {
            let topic = $(element).find('a.tout-tag-link').text().trim();
            let title = $(element).find('a.tout-title-link').text().trim();
            let newsSnippet = $(element).find('div.tout-copy.river').text().trim();
            let newsHref = `${process.env.NEWS_ROOT}` + $(element).find('a.tout-title-link').attr('href').replace(/https?:\/\/[^\/]+/gi, '');
            
            newsData.push({
                topic,
                title,
                newsSnippet,
                newsHref
            });

            let newsStory = new Story({
                topic,
                title,
                newsSnippet,
                newsHref 
            });
            newsStory.save(err => {
                if(err){
                    console.log(err)
                } else {
                    console.log('Data has been saved!')
                }
            });
        });
        return newsData;
    } catch(err) {
        console.log(err)
    }
};

router.get('/', async (req, res) => {
    try {
        const data = await scrapeNews();
        res.json(data);
    } catch(err){
        console.log(err)
    }
});

module.exports = router;