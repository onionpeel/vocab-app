import React, {useState} from 'react';
import {ListGroup, Row, Col, Container, Alert} from 'react-bootstrap';
import VocabListTerm from './VocabListTerm';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import VocabListPaginate from './VocabListPaginate';
import {Redirect} from 'react-router-dom';

const VocabListTerms = ({vocabulary, name}) => {
  let [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  let lastPostIndex = currentPage * postsPerPage;
  let firstPostIndex = lastPostIndex - postsPerPage;
  let displayedTerms = vocabulary.slice(firstPostIndex, lastPostIndex);
  let totalPages = Math.ceil(vocabulary.length / postsPerPage);

  const showPagination = () => {
    return vocabulary.length > 10
        &&
      <VocabListPaginate
        currentPage={currentPage}
        paginate={paginate}
        prevPage={prevPage}
        nextPage={nextPage}
        totalPages={totalPages}
      />
  };

  const paginate = async pageNumber => {
    setCurrentPage(pageNumber);
    window.scrollTo(0,0);
  };

  const prevPage = async pageNumber => {
    if (pageNumber > 1) {
      setCurrentPage(--currentPage);
      window.scrollTo(0,0);
    };
  };

  const nextPage = async () => {
    setCurrentPage(++currentPage);
    window.scrollTo(0,0);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} style={{textAlign: 'center'}} className="mx-auto">
          <Alert style={{backgroundColor: 'rgb(196, 233, 245)'}}>
            <h4>Hey, {name}, that's a fine list you have!</h4>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="mx-auto">
          {showPagination()}
          <ListGroup variant="flush">
            {displayedTerms.map(term => (
              <VocabListTerm
                key={term._id}
                id={term._id}
                kanji={term.kanji}
                kana={term.kana}
                english={term.english}
              />
            ))}
          </ListGroup>
          {showPagination()}
        </Col>
      </Row>
    </Container>
  );
};

VocabListTerms.propTypes = {
  vocabulary: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  name: state.authenticate.user.name
});

export default connect(mapStateToProps)(VocabListTerms);
