const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let VocabTerm = new Schema({
  kanji: String,
  kana: String,
  english: String
});

module.exports = mongoose.model('vocabTerm', VocabTerm);
