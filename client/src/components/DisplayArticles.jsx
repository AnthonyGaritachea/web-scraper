import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Article from './Article.jsx';
import { fetchNews } from '../redux/actions/actionTypes.js';

const DisplayArticles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.scrapedNews.news);

    useEffect(() => {
        dispatch(fetchNews());
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
                    <div className='article-container' key={story._id}>
                        <Article 
                            id={story._id}
                            topic={story.topic}
                            title={story.title}
                            newsSnippet={story.newsSnippet}
                            newsHref={story.newsHref}
                        />
                    </div>
                )
            })}
        </div>
    )
};

export default DisplayArticles;