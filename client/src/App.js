import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Dictionary from './components/Dictionary';
import VocabList from './components/VocabList';
import Registration from './components/Registration';
import Header from './components/Header';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dictionary' component={Dictionary} />
          <Route path='/about' component={About} />
          <Route path='/vocablist' component={VocabList} />
          <Route path='/registration' component={Registration} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
