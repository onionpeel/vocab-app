import React from 'react';
import Header from './Header';
import VocabListTerms from './VocabListTerms';
import VocabListEmpty from './VocabListEmpty';
import {Container, Row, Col, Card} from 'react-bootstrap';

// const tempArray = [
//   {kanji: '本', kana: 'ほん', english: 'book'},
//   {kanji: '家', kana: 'いえ', english: 'house'},
//   {kanji: '犬', kana: 'いぬ', english: 'dog'}
// ];
const tempArray = null;

const VocabList = () => {
  return (
    <div>
      <Header />
      <Container>
        {tempArray ? <VocabListTerms vocabulary={tempArray}/> : <VocabListEmpty />}
      </Container>
    </div>
  );
};

export default VocabList;
