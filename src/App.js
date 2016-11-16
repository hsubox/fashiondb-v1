import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import ModelsList from './components/ModelsList';
import ModelForm from './components/ModelForm';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route component={MainLayout}>
            <Route path="/" component={Home} />
            <Route path="/login" component={LoginForm} />
            <Route path="/models" component={ModelsList} />
            <Route path="/models/new" component={ModelForm} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
