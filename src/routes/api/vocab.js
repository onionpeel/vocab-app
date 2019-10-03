const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Vocab = require('../../models/Vocab');

//@route        GET /api/vocab
//@description  Retrieves all vocab terms from db
//@access       private
router.get('/', auth, async (req, res) => {
  try {
    const terms = await Vocab.find().populate({path: 'user', select: 'name'});
    const filtered = terms.filter(term => {
      return term.user._id.toString() === req.user._id.toString();
    });

    res.status(201).send(filtered);
  } catch (err) {
    res.status(400).send({message: 'Unable to load items'});
  };
});

//@route        POST /api/vocab
//@description  Adds a vocab term to db
//@access       private
router.post('/', auth, async (req, res) => {
  try {
    const term = new Vocab({
      kanji: req.body.kanji,
      kana: req.body.kana,
      english: req.body.english,
      user: req.user._id
    });

    await term.save();
    res.status(201).send(term);
  } catch (err) {
    res.status(400).send({message: 'Unable to post item'});
  };
});

//@route        DELETE /api/vocab
//@description  Deletes a vocab term from the db
//@access       private
router.delete('/:id', auth, async (req, res) => {
  const id = req.params.id;
  try {
    await Vocab.deleteOne({_id: id});
    res.status(201).send();
  } catch (err) {
    res.status(400).send({message: 'Unable to delete item'});
  };
});

//@route        POST /api/vocab/all
//@description  Deletes all vocab terms from the db
//@access       private
// router.delete('/all', auth, async (req, res) => {
//   try {
//     await
//   } catch (err) {
//     res.status(400).send({message: 'Unable to delete items'});
//   };
// });

module.exports = router;
