const express = require('express');
const router = express.Router();

const Story = require('../models/Story.js');

router.get('/', async (req, res) => {
    try {
        const newsStories = await Story.find();
        res.json(newsStories);
    } catch(err){
        res.status(500).json({message: err})
    }
});

router.get('/:id', async (req, res) => {
    try {
        const newsStory = await Story.findById(req.params.id);
        res.json(newsStory);
    } catch(err){
        if(err){
            res.status(500).json({message: err})
        };
    };
});

router.delete('/:id', async (req, res) => {
    try {
        await Story.findByIdAndDelete(req.params.id);
        res.json('News Story Successfully Deleted');
    } catch(err){
        if(err){
            console.log('unable to delete story');
            res.status(500).json({ message: err});
        };
    };
});

module.exports = router;