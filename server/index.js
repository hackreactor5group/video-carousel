/* eslint-disable no-console */
const express = require('express');
const body_parser = require('body-parser');

const Videos = require('../database/Videos.js')

const app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.use('/videos/:Id', express.static(`${__dirname}/../client/dist`));
app.use(express.static(`${__dirname}/../client/dist`));

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});


app.get('/api/videos/:id/photos', (req, res) => {
  console.log('hit')
  Videos.find({_id: req.params.id })
    .then((results) =>  {
      console.log(results);
      res.send(results)
    });

});

app.listen(4000, () => {
  console.log('listening on port 4000');
});
