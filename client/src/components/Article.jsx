import React from 'react';
import { FiHeart } from "react-icons/fi";
import { RiCloseCircleLine } from "react-icons/ri";

const Article = props => {
    const { id, topic, title, newsSnippet, newsHref } = props;

    const addToFavorites = () => {
        console.log('added to favorites!!!');
    };

    const deleteArticle = () => {
        console.log('deleted article');
    };

    return(
        <>
        <div className='article-topic'>
            <p>{topic}</p>
        </div>
        <div className='article-details'>
            <div className='icon-container'>
                <div className='heart-icon' onClick={addToFavorites}>
                    <FiHeart color='red' size='25px'/>
                </div>
                <div className='delete-icon' onClick={deleteArticle}>
                    <RiCloseCircleLine color='red' size='25px' />
                </div>
            </div>
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