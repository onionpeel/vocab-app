const client = require('./client');
const {redisGet} = require('./cacheUtils');

const cache = async (req, res, next) => {
  try {
    const {term, page} = req.params;
    const redisKey = `${term}_${page}`;

    const vocab = await redisGet(redisKey);
    const jsonVocab = JSON.parse(vocab);
    if (jsonVocab) {
      res.status(200).send(jsonVocab);
    } else next();
  } catch (err) {
    console.log(err);
    next(err);
  };
};

module.exports = cache;
