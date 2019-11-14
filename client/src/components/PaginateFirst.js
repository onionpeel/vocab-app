import React from 'react';
import PropTypes from 'prop-types';
import {Pagination} from 'react-bootstrap';

const PaginateFirst = ({currentPage, nextPage, termLength}) => {
  if (20 / termLength !== 1) {
    return null;
  } else {
    return (
      <Pagination>
        <Pagination.Next onClick={() => nextPage(currentPage)}>View more</Pagination.Next>
      </Pagination>
    );
  };
};

PaginateFirst.propTypes = {
  currentPage: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  termLength: PropTypes.number.isRequired
};

export default PaginateFirst;
