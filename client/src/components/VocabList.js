import React, {useEffect} from 'react';
import VocabListTerms from './VocabListTerms';
import VocabListEmpty from './VocabListEmpty';
import {Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import axios from 'axios';
import {getVocab} from '../actions/vocabActions';

const VocabList = ({list, getVocab}) => {

  useEffect(() => {
    getVocab();
  }, []);

  // const tempArray = [
  //   {kanji: '本', kana: 'ほん', english: 'book'},
  //   {kanji: '家', kana: 'いえ', english: 'house'},
  //   {kanji: '犬', kana: 'いぬ', english: 'dog'}
  // ];
  console.log(list)

  return (
    <div>
      <Container>
        {list.length > 0 ? <VocabListTerms vocabulary={list}/> : <VocabListEmpty />}
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  list: state.vocabulary.list
});

const mapDispatchToProps = {
  getVocab
};

export default connect(mapStateToProps, mapDispatchToProps)(VocabList);
