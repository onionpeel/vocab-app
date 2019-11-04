import React from 'react';
import {connect} from 'react-redux';
import HeaderLoggedOut from './HeaderLoggedOut';
import HeaderLoggedIn from './HeaderLoggedIn';
import PropTypes from 'prop-types';

const Header = ({isAuthenticated}) => {
  return (
    !isAuthenticated
    ?
    <HeaderLoggedOut />
    :
    <HeaderLoggedIn />
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.authenticate.isAuthenticated,

});



export default connect(mapStateToProps)(Header);
