import React, {useEffect} from 'react';
import VocabListTerms from './VocabListTerms';
import VocabListEmpty from './VocabListEmpty';
import {Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getVocab} from '../actions/vocabActions';
import PropTypes from 'prop-types';

const VocabList = ({list, getVocab}) => {
  useEffect(() => {
    getVocab();
  }, []);

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
  getVocab: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  list: state.vocabulary.list
});

const mapDispatchToProps = {
  getVocab
};

export default connect(mapStateToProps, mapDispatchToProps)(VocabList);
