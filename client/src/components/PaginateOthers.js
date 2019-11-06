import React from 'react';
import PropTypes from 'prop-types';
import {Pagination} from 'react-bootstrap';

const PaginateOthers = ({currentPage, paginate, prevPage, nextPage}) => {
  const pageNumbers = [];
  let active = currentPage;

  for(let i = (currentPage - 1); i <= (currentPage + 1); i++) {
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
      <Pagination.Next onClick={() => nextPage(currentPage)}>View more</Pagination.Next>
    </Pagination>
  );
};


PaginateOthers.propTypes = {
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired
};

export default PaginateOthers;
