const mongoose = require('mongoose');

// const mongoUri = 'mongodb://172.17.0.3:27017/amazonDB';
const mongoUri = 'mongodb://database/amazonDB';

mongoose.connect(mongoUri, { useNewUrlParser: true });

const db = mongoose.connection;

module.exports = db;
