import React, {useState, useEffect} from 'react';
import {Container, Col, Row, Form, Button, Image, ListGroup} from 'react-bootstrap';
import Term from './Term';
import SignUpReminder from './SignUpReminder';
import PaginateFirst from './PaginateFirst';
import PaginateOthers from './PaginateOthers';
import PaginateLast from './PaginateLast';
import PaginateNoMatch from './PaginateNoMatch';
import axios from 'axios';
import uuid from 'uuid/v4';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import bookstoreCropped from '../images/bookstoreCropped.jpg';

const Search = ({isAuthenticated, match}) => {
  const [terms, setTerms] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [searchWord, setSearchWord] = useState(match.params.term);
  let [currentPage, setCurrentPage] = useState(parseInt(match.params.page));

  let [isQuery, setIsQuery] = useState(false);

  useEffect(() => {
    const fetchByQuery = async () => {
      const response = await axios.get(`/api/vocab/${match.params.term}/${match.params.page}`);
      setTerms(response.data);
    };

    fetchByQuery();
  }, []);

  const setQuery = e => {
    setSearchWord(e.target.value);
  };

  const fetchData = async e => {
    e.preventDefault();
    setCurrentPage(1);
    if (searchWord.length === 0) return;
    const response = await axios.get(`/api/vocab/${searchWord}/${currentPage}`);
    setTerms(response.data);
    setIsQuery(true);
    setIsQuery(false);
  };

  const showSignUpAlert = () => {
    return (!isAuthenticated && <SignUpReminder terms={terms}/>);
  };

  const noMatch = () => {
    if (terms.length === 0) {
      return <PaginateNoMatch />
    };
  };

  const showPagination = () => {
    if (terms.length > 0) {
      return (
       currentPage === 1 ?
         <PaginateFirst
             currentPage={currentPage}
             nextPage={nextPage}
             termLength={terms.length}
           />
         :
       (20 / terms.length === 1) ?
         <PaginateOthers
             currentPage={currentPage}
             paginate={paginate}
             prevPage={prevPage}
             nextPage={nextPage}
           />
         :
         <PaginateLast
           currentPage={currentPage}
           paginate={paginate}
           prevPage={prevPage}
         />
       );
    };
  };

  const paginate = async pageNumber => {
    const response = await axios.get(`/api/vocab/${searchWord}/${pageNumber}`);
    setCurrentPage(pageNumber);
    setTerms(response.data);
    window.scrollTo(0,0);
    setIsQuery(true);
    setIsQuery(false);
  };

  const prevPage = async pageNumber => {
    if (pageNumber > 1) {
      setCurrentPage(--currentPage);
      const response = await axios.get(`/api/vocab/${searchWord}/${currentPage}`);
      setTerms(response.data);
      window.scrollTo(0,0);
      setIsQuery(true);
      setIsQuery(false);
    };
  };

  const nextPage = async () => {
    setCurrentPage(++currentPage);
    const response = await axios.get(`/api/vocab/${searchWord}/${currentPage}`);
    setTerms(response.data);
    window.scrollTo(0,0);
    setIsQuery(true);
    setIsQuery(false);
  };

  const queryVocab = () => {
    if (isQuery) {
      return <Redirect to={`/search/${searchWord}/${currentPage}`} />
    };
  };

  return (
    <div>
    {queryVocab()}
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
              {noMatch()}
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
            <Image src={bookstoreCropped} className="img-fluid" rounded/>
            <p>I've lived here my whole life and still can't read this stuff.  I wish I had a convenient tool for looking up the meaning of these words.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Search.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.authenticate.isAuthenticated
});

export default connect(mapStateToProps)(Search);
