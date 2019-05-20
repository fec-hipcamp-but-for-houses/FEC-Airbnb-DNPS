const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(express.static('client/public/'));
app.use(bodyParser.json());

app.get('/rooms', (req, res) => {
  db.readOne(req.query.listingId, (err, docs) => {
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      res.status(200);
      res.send(docs);
    }
  });
});
module.exports = app;
