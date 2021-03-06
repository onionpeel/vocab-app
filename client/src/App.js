import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Dictionary from './components/Dictionary';
import Search from './components/Search';
import VocabList from './components/VocabList';
import Registration from './components/Registration';
import Header from './components/Header';
import NoMatch from './components/NoMatch';
import {connect} from 'react-redux';
import {BrowserRouter as Router,
  Switch,
  Route,
  Redirect} from 'react-router-dom';

const App = ({isAuthenticated}) => {

  const PrivateRoute = ({component: Component, ...rest}) => {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          )
        }
      />
    );
  };

  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dictionary' component={Dictionary} />
          <Route path='/search/:term/:page' component={Search} />
          <Route path='/about' component={About} />
          <Route path='/registration' component={Registration} />
          <PrivateRoute path='/vocablist' isAuthenticated={isAuthenticated} component={VocabList} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>

  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.authenticate.isAuthenticated
});

export default connect(mapStateToProps)(App);
