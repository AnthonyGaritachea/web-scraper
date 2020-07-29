import React from 'react';
import { useSelector } from 'react-redux';

import Article from './Article.jsx';

const Favorites = () => {
    const favoriteStories = useSelector(state => state.favoriteStories);

    if(favoriteStories.length === 0){
        return (
            <div>
                <h1>Favorites: </h1>
                <p>none currently</p>
            </div>
        )
    };
    
    return (
        <div>
            <h1>Favorites:</h1>
            { favoriteStories.map(story => {
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
        </div>
    )
};

export default Favorites;