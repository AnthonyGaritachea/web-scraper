import React from 'react';

const Article = (props) => {
    const { topic, title, newsSnippet, newsHref } = props;
    return(
        <div>
            <p>{topic}</p>
            <p>{title}</p>
            <p>{newsSnippet}</p>
            <p>{newsHref}</p>
        </div>
    )
};

export default Article;