import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import * as asyncInitialState from 'redux-async-initial-state';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import ModelsList from './components/ModelsList';
import ModelAdd from './components/ModelAdd';
import ModelEdit from './components/ModelEdit';
import NoMatch from './components/NoMatch';
import './App.css';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
    };

    firebase.initializeApp(config);
  }
  render() {
    const reducer = asyncInitialState.outerReducer(reducers);

    const loadStore = (currentState) => {
      return new Promise(resolve => {
        firebase.database().ref(`/models`)
          .once('value', snapshot => {
            resolve({
              ...currentState,
              models: snapshot.val()
            });
          });
      });
    }

    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk, asyncInitialState.middleware(loadStore)));
    
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route component={MainLayout}>
            <Route path="/" component={Home} />
            <Route path="/login" component={LoginForm} />
            <Route path="/models" component={ModelsList} />
            <Route path="/models/new" component={ModelAdd} />
            <Route path="/models/edit/:modelId" component={ModelEdit} />
            <Route path="*" component={NoMatch} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
