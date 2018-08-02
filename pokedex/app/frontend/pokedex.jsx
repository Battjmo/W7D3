import React  from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions.js';
import Root from './components/root.jsx';
import configureStore from './store/store.js';
import {selectAllPokemon } from './reducers/selectors.js';
import { HashRouter, Route } from 'react-router-dom';



document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
