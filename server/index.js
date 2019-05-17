/* eslint-disable no-console */
const express = require('express');
// const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const port = 3004;
app.use(express.static('client/public/'));
// app.use(bodyParser.json());

app.get('/rooms', (req, res) => {
  db.readOne(req.query.listingId, (err, docs) => {
    // console.log('response:', docs);
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      console.log('room:', JSON.parse(docs));
      res.status(200);
      res.send(JSON.parse(docs));
    }
  });
});
app.listen(port, () => {
  console.log('Server is listening on port:', port);
});
