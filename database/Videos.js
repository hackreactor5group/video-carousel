const mongoose = require('mongoose');
const db = require('./index.js');

const videoSchema = new mongoose.Schema({
  _id: Number,
  videos: Array,
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;