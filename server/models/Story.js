const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
    topic: String,
    title: String,
    newsSnippet: String,
    newsHref: String
});

module.exports = mongoose.model('Story', storySchema);