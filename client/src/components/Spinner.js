import React from 'react';
import spinner from '../images/spinner.gif';

const Spinner = ({isLoading}) => {
  return (
    isLoading
      ?
      <img
        src={spinner}
        style={{width: '35px', margin: 'auto', display: 'block'}}
        alt="Loading..."
      />
      :
      null
  );
};

export default Spinner;
