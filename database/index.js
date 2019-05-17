const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/DNP');

mongoose.connection.once('open', () => {
  console.log('connection has been made...');
}).on('error', (error) => {
  console.log('connection error: ', error);
});

const roomSchema = mongoose.Schema({
  listingId: Number,
  room: String,
});

const Room = mongoose.model('room', roomSchema);
let store = (err, result) => {
  // console.log('inside index.js db store', result);
  result.save((err, result) => {
    if (err) console.log(err);
  });
};

let readOne = (req, callback) => {
  console.log('req at database', req);
  Room.findOne({ listingId: req }, (err, obj) => {
    if (err) return console.log(err);
    callback(null, obj.room);
  });
};
module.exports = {
  Room,
  store,
  readOne,
};
