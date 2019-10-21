import React from 'react';
import {connect} from 'react-redux';
import HeaderLoggedOut from './HeaderLoggedOut';
import HeaderLoggedIn from './HeaderLoggedIn';

const Header = ({isAuthenticated}) => {
  return (
    !isAuthenticated
    ?
    <HeaderLoggedOut />
    :
    <HeaderLoggedIn />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.authenticate.isAuthenticated,

});



export default connect(mapStateToProps)(Header);
