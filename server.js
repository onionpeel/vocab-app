const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('./config/dbConnect');
const VocabTerm = require('./models/VocabTerm');

const axios = require('axios');

const app = express();
app.use(bodyParser.json());

dbConnect();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('This is my server');
});

app.get('/vocab', async (req, res) => {
  try {
    let response = await axios.get(`https://jisho.org/api/v1/search/words?keyword=house`);
    let term = response.data.data[0].slug;
    console.log(term);
    res.send(`Your term is ${term}`);
  } catch(err) {
      console.log(err);
  };
});

app.post('/', async (req, res) => {
  const vocab = new VocabTerm({
    eng: req.body.eng,
    kana: req.body.kana,
    kanji: req.body.kanji
  });
  try {
    const vocabTerm = await vocab.save();
    res.status(200).send(vocabTerm);
  } catch(err) {
    console.log(err);
  };
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
