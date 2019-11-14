import React from 'react';
import PropTypes from 'prop-types';
import {Pagination} from 'react-bootstrap';

const PaginateLast = ({currentPage, paginate, prevPage}) => {
  const pageNumbers = [];
  let active = currentPage;

  for(let i = (currentPage - 1); i <= (currentPage); i++) {
    pageNumbers.push(
      <Pagination.Item key={i} active={i === active} onClick={() => paginate(i)}>
        {i}
      </Pagination.Item>
    );
  };

  return (
    <Pagination>
      <Pagination.First onClick={() => paginate(1)}/>
      <Pagination.Prev onClick={() => prevPage(currentPage)}>Previous</Pagination.Prev>
      {pageNumbers}
    </Pagination>
  );
};

PaginateLast.propTypes = {
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired
};

export default PaginateLast;
