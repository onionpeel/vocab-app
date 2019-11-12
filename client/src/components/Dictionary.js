import React, {useState} from 'react';
import {Container, Col, Row, Form, Button, Image} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import bookstoreCropped from '../images/bookstoreCropped.jpg';

const Dictionary = ({isAuthenticated, match}) => {
  const [searchWord, setSearchWord] = useState('');
  let [currentPage, setCurrentPage] = useState(1);
  let [isQuery, setIsQuery] = useState(false);

  const setQuery = e => {
    setSearchWord(e.target.value);
  };

  const fetchData = e => {
    e.preventDefault();
    setCurrentPage(1);
    if (searchWord.length === 0) return;
    setIsQuery(true);
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

Dictionary.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.authenticate.isAuthenticated
});

export default connect(mapStateToProps)(Dictionary);
