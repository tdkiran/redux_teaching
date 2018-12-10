import React, { Component } from 'react';
import './App.css';
import { AddNote } from './components/containers/AddNote/AddNote';
import NotesList from './components/containers/NotesList/NotesList'

// Import For Redux

import { Provider } from "react-redux";
import store from "./redux/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AddNote />
        <NotesList />
      </Provider>
    );
  }
}

