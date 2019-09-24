const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let VocabTermSchema = new Schema({
  kanji: String,
  kana: String,
  english: String,
  _user: {
    Schema.Types.ObjectId,
    ref: 'user'
  }
});

const VocabTerm = mongoose.model('vocabTerm', VocabTermSchema);
module.exports = VocabTerm;
