import React, {useState} from 'react';
import {Alert} from 'react-bootstrap';

const IsLoadingAlert = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="light" onClose={() => setShow(false)} dismissible>
        <Alert.Heading style={{textAlign: 'center'}}>Loading user...</Alert.Heading>
      </Alert>
    );
  }
};

export default IsLoadingAlert;
