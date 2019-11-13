import React from 'react';
import PropTypes from 'prop-types';
import {Pagination} from 'react-bootstrap';

const VocabListPaginate = ({currentPage, paginate, prevPage, nextPage, totalPages}) => {
  const pageNumbers = [];
  let active = currentPage;

  if (currentPage === 1) {
    return (
      <Pagination>
        <Pagination.Next onClick={() => nextPage(currentPage)}>View more</Pagination.Next>
      </Pagination>
    );
  } else  {
    for (let i = (currentPage - 1); (i <= currentPage + 1) && (i <= totalPages); i++) {
      pageNumbers.push(
        <Pagination.Item key={i} active={i === active} onClick={() => paginate(i)}>
          {i}
        </Pagination.Item>
      );
    };

    const isLastPage = () => {
      if (active !== totalPages) {
        return <Pagination.Next onClick={() => nextPage(currentPage)}>View more</Pagination.Next>;
      };
    };

    return (
      <Pagination>
        <Pagination.First onClick={() => paginate(1)}/>
        <Pagination.Prev onClick={() => prevPage(currentPage)}>Previous</Pagination.Prev>
        {pageNumbers}
        {isLastPage()}
      </Pagination>
    );
  };
};

VocabListPaginate.propTypes = {
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default VocabListPaginate;
