const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

const fetchNews = async () => {
    try {
        const response = await axios.get(`${process.env.NEWS_URL}`);
        const { data } = await response;
        let $ = await cheerio.load(data);

        let newsData = [];
        
        // iterating through parent element
        $('section.river-item.featured-post').each((index, element) => {
            let topic = $(element).find('a.tout-tag-link').text().trim();
            let title = $(element).find('a.tout-title-link').text().trim();
            let newsSnippet = $(element).find('div.tout-copy.river').text().trim();
            let newsHref = `${process.env.NEWS_ROOT}` + $(element).find('a.tout-title-link').attr('href');
            
            newsData.push({
                topic,
                title,
                newsSnippet,
                newsHref
            });
        });
        console.log(newsData)
    } catch(err) {
        console.log(err)
    }
};

console.log(fetchNews());
