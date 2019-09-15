const express = require('express');
const bodyParser = require('body-parser');

const axios = require('axios');

const app = express();
app.use(bodyParser.json());

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

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
