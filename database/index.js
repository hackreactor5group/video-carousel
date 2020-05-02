const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/amazonDB';

mongoose.connect(mongoUri, { useNewUrlParser: true });

const db = mongoose.connection;

module.exports = db;
