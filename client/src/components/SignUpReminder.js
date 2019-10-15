import React from 'react';

const SignUpReminder = ({terms}) => (
  <div style={{marginTop: 15}}>
    {terms.length > 0 ? <h5>Sign up so you can add words to your own custom vocabulary list!</h5> : null}
  </div>
);

export default SignUpReminder;
