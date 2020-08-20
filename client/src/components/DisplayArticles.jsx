import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Article from './Article.jsx';
import { fetchNews } from '../redux/actions/actionTypes.js';

const DisplayArticles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.scrapedNews.news);

    if(!articles){
        return (
            <div>
                loading....
            </div>
        );
    };

    return (
        <>
            <div className='button-container'>
                <button className='button' onClick={() => dispatch(fetchNews())}>Get stories</button>
            </div>
        <>
            { articles.map(story => {
                return (
                    <div className='article-container' key={story._id}>
                        <Article 
                            story={story}
                            id={story._id}
                            topic={story.topic}
                            title={story.title}
                            newsSnippet={story.newsSnippet}
                            newsHref={story.newsHref}
                        />
                    </div>
                )
            })}
        </>
       </>
    )
};

export default DisplayArticles;