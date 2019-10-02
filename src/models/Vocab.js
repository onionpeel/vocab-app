const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let VocabSchema = new Schema({
  kanji: String,
  kana: String,
  english: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

const Vocab = mongoose.model('vocab', VocabSchema);
module.exports = Vocab;
