import React, { useState, useEffect } from 'react';
import { FiHeart } from "react-icons/fi";
import { RiCloseCircleLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import Tooltip from 'rc-tooltip';
import  'rc-tooltip/assets/bootstrap_white.css';

import { addToFavorites } from '../redux/actions/actionTypes.js';
import { deleteStory } from '../redux/actions/actionTypes.js';

const Article = props => {
    const { story, id, topic, title, newsSnippet, newsHref } = props;
    const favoriteStories = useSelector(state => state.favoriteStories);
    const dispatch = useDispatch();

    const [ isHeartTooltipVisible, setIsHeartTooltipVisible ] = useState(false);
    const [ isDeleteTooltipVisible, setDeleteTooltipVisible ] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsHeartTooltipVisible(false);
        }, 1000);

        return () => clearTimeout(timeout); 
    }, [isHeartTooltipVisible]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDeleteTooltipVisible(false);
        }, 1000);
        
        return () => clearTimeout(timeout); 
    }, [isDeleteTooltipVisible]);
    
    return(
        <>
            <div className='article-topic'>
                <p>{topic}</p>
            </div>
            <div className='article-details'>
                <div className='icon-container'>
                    <div className='heart-icon'
                        onClick={() => {dispatch(addToFavorites(story)); setIsHeartTooltipVisible(true)}}
                    >
                        <Tooltip 
                            placement="top" 
                            trigger='click' 
                            animation='zoom'
                            visible={isHeartTooltipVisible}
                            overlay={<span className='tooltip'>adding to favorites...</span>}
                        >
                                <FiHeart
                                    color='red'
                                    size='25px'
                                    style={{ fill: (favoriteStories.some(story => story._id === id)) ? 'red' : 'none' }}
                                />
                        </Tooltip>
                    </div>
                    <div className='delete-icon'
                        onClick={() => {dispatch(deleteStory(story)); setDeleteTooltipVisible(true)}}
                    >
                        <Tooltip
                            placement="top"
                            trigger='click'
                            animation='zoom'
                            visible={isDeleteTooltipVisible}
                            destroyTooltipOnHide={false}
                            overlay={<span className='tooltip'>deleting...</span>}
                        >
                            <RiCloseCircleLine
                                color='red'
                                size='25px'
                            />
                        </Tooltip>
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