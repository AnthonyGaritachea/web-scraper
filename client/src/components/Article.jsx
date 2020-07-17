import React from 'react';

const Article = props => {
    const { id, topic, title, newsSnippet, newsHref } = props;
    return(
        <>
        <div className='article-topic'>
            <p>{topic}</p>
        </div>
        <div className='article-details'>
            <p>{title}</p>
            <p>{newsSnippet}..</p>
            <div className='article-link'>
            <a href={newsHref} target='_blank'>View Full Story</a>
            </div>
        </div>
        </>
    )
};

export default Article;