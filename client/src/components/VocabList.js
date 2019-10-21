import React from 'react';
import VocabListTerms from './VocabListTerms';
import VocabListEmpty from './VocabListEmpty';
import {Container} from 'react-bootstrap';

const tempArray = [
  {kanji: '本', kana: 'ほん', english: 'book'},
  {kanji: '家', kana: 'いえ', english: 'house'},
  {kanji: '犬', kana: 'いぬ', english: 'dog'}
];
// const tempArray = null;

const VocabList = () => {
  return (
    <div>
      <Container>
        {tempArray ? <VocabListTerms vocabulary={tempArray}/> : <VocabListEmpty />}
      </Container>
    </div>
  );
};

export default VocabList;
