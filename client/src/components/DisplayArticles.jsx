import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Article from './Article.jsx';

const DisplayArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        try {
            const fetchArticles = async () => {
                const { data } = await axios.get('/stories');
                setArticles(data);
            };
            fetchArticles();
        } catch (err) {
            console.log(err)
        }
    }, []);

    if(!articles){
        return (
            <div>
                loading....
            </div>
        );
    };


    return (
        <div>
            { articles.map(story => {
                return (
                    <Article 
                        topic={story.topic}
                        title={story.title}
                        newsSnippet={story.newsSnippet}
                        newsHref={story.newsHref}
                    />
                )
            })}
        </div>
    )
};

export default DisplayArticles;