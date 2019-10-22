import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saveToLocalStorage = state => {
  try {
    if (state.authenticate.isAuthenticated === false) {
      return;
    };

    const data = JSON.stringify(state);
    localStorage.setItem('state', data);
  } catch (err) {
    console.log(err);
  };
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    };
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  };
};

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
