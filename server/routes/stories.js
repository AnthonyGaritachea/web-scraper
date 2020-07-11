const express = require('express');
const router = express.Router();

const Story = require('../models/Story.js');

router.get('/', async (req, res) => {
    try {
        const newsStories = await Story.find();
        res.json(newsStories);
    } catch(err){
        res.json({message: err})
    }
});

module.exports = router;