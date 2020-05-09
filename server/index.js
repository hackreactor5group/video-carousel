/* eslint-disable no-console */
const express = require('express');
const body_parser = require('body-parser');
const Videos = require('../database/Videos.js')

const app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.use('/videos/:Id', express.static(`${__dirname}/../client/dist`));
app.use(express.static(`${__dirname}/../client/dist`));

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
