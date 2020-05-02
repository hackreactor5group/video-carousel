/* eslint-disable no-console */
const express = require('express');
const body_parser = require('body-parser');

const app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.use('/videos/:Id', express.static(`${__dirname}/../client/dist`));
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/api/video/:id/photos', (req, res) => {
  console.log('hit')
});

app.listen(4000, () => {
  console.log('listening on port 4000');
});
