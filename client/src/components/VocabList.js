import React, {useEffect} from 'react';
import VocabListTerms from './VocabListTerms';
import VocabListEmpty from './VocabListEmpty';
import {Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import {retrieveVocab} from '../actions/vocabActions';
import PropTypes from 'prop-types';

const VocabList = ({list, retrieveVocab}) => {
  useEffect(retrieveVocab, []);

  return (
    <div>
      <Container>
        {list.length > 0 ? <VocabListTerms vocabulary={list}/> : <VocabListEmpty />}
      </Container>
    </div>
  );
};

VocabList.propTypes = {
  list: PropTypes.array,
  retrieveVocab: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  list: state.vocabulary.list
});

const mapDispatchToProps = {
  retrieveVocab
};

export default connect(mapStateToProps, mapDispatchToProps)(VocabList);
