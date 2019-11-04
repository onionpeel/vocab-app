import React from 'react';
import {Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const SignUpReminder = ({terms}) => (
  <>
    {terms.length > 0
      &&
    <Alert style={{backgroundColor: 'rgb(196, 233, 245)'}}>
      <Link to="/registration" style={{color: 'blue'}}>
        Sign up
      </Link>
       <span> </span>so you can add words to your own custom vocabulary list!
    </Alert>
    }
  </>
);

SignUpReminder.propTypes = {
  terms: PropTypes.array
};

export default SignUpReminder;
