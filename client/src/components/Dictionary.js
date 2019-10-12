import React, {useEffect, useState} from 'react';
import {Container, Col, Row, Form, Button, Image, ListGroup} from 'react-bootstrap';
import Header from './Header';
import axios from 'axios';
import uuid from 'uuid/v4';

const Dictionary = () => {
  const [terms, setTerms] = useState([]);

  const fetchData = async () => {
    const response = await axios.post('/api/vocab/term', {term: 'house'});
    setTerms(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <ul>
        {
          terms.map(term => (
            <li key={uuid()}>
              {term.japanese[0].word}
              <br />
              {term.japanese[0].reading}
              <br />
              <ul>
                {term.senses[0].english_definitions.map(def => (
                  <li key={uuid()}>
                    {def}
                  </li>
                ))}
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Dictionary;
