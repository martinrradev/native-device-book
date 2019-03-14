import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './Router';
class App extends Component {
  componentWillMount() {
   // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyAHdVZwTrZnIzRdYJYylyfcHmahUdDSVTc",
      authDomain: "native-device-book.firebaseapp.com",
      databaseURL: "https://native-device-book.firebaseio.com",
      projectId: "native-device-book",
      storageBucket: "native-device-book.appspot.com",
      messagingSenderId: "69740766856"
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;
