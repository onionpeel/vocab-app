import React, {useState} from 'react';
import {Container, Col, Row, Form, Button, Image, ListGroup} from 'react-bootstrap';
import Term from './Term';
import SignUpReminder from './SignUpReminder';
import PaginateFirst from './PaginateFirst';
import PaginateOthers from './PaginateOthers';
import axios from 'axios';
import uuid from 'uuid/v4';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Dictionary = ({isAuthenticated}) => {
  const [terms, setTerms] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  let [currentPage, setCurrentPage] = useState(1);

  const setQuery = e => {
    setSearchWord(e.target.value);
  };

  const fetchData = async e => {
    e.preventDefault();
    setCurrentPage(1);
    if (searchWord.length === 0) return;
    const response = await axios.post('/api/vocab/page', {term: searchWord, page: currentPage});
    setTerms(response.data);
  };

  const showSignUpAlert = () => {
    return (!isAuthenticated && <SignUpReminder terms={terms}/>);
  };

  const showPagination = () => {
    if (terms.length > 0) {
      return (
        currentPage === 1 ?
          <PaginateFirst
              currentPage={currentPage}
              nextPage={nextPage}
            />
          :
          <PaginateOthers
              currentPage={currentPage}
              paginate={paginate}
              prevPage={prevPage}
              nextPage={nextPage}
            />
      );
    };
  };

  const paginate = async pageNumber => {
    setCurrentPage(pageNumber);
    const response = await axios.post('/api/vocab/page', {term: searchWord, page: pageNumber});
    setTerms(response.data);
    window.scrollTo(0,0);
  };

  const prevPage = async pageNumber => {
    if (pageNumber > 1) {
      setCurrentPage(--currentPage);
      const response = await axios.post('/api/vocab/page', {term: searchWord, page: currentPage});
      setTerms(response.data);
      window.scrollTo(0,0);
    };
  };

  const nextPage = async pageNumber => {
    setCurrentPage(++currentPage);
    const response = await axios.post('/api/vocab/page', {term: searchWord, page: currentPage});
    setTerms(response.data);
    window.scrollTo(0,0);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>
              <Form className="mt-2" onSubmit={fetchData}>
                <Form.Group>
                  <Form.Label>Find that Japanese word you've always longed for</Form.Label>
                  <Form.Control type="search" placeholder="What's taking you so long?" value={searchWord} onChange={setQuery}/>
                  <Form.Text className="text-muted">
                    Life fulfillment is a click away.
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" style={{marginBottom: 10}}>
                  Search
                </Button>
              </Form>
            </div>
            <div>
              {showSignUpAlert()}
              {showPagination()}
              <ListGroup variant="flush">
                {terms.map(term => (
                  <Term
                    key={uuid()}
                    kanji={term.japanese[0].word}
                    kana={term.japanese[0].reading}
                    english={term.senses}
                  />
                ))}
              </ListGroup>
              {showPagination()}
            </div>
          </Col>

          <Col xs={12} lg={5} className="sidebar-section">
            <Image src='assets/bookstoreCropped.jpg' className="img-fluid" rounded/>
            <p>I've lived here my whole life and still can't read this stuff.  I wish I had a convenient tool for looking up the meaning of these words.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Dictionary.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.authenticate.isAuthenticated
});

export default connect(mapStateToProps)(Dictionary);
