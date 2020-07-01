import React from 'react';
import axios from 'axios';

const Button = () => {
    const scrapeData = async () => {
        try {
            const response = await axios.get('/scraper');
            console.log(response.data);
        } catch(err) {
            console.log(err)
        }
    }

    return(
        <div>
            <button onClick={scrapeData}>Scrape Latest News</button>
        </div>
    )
};

export default Button;