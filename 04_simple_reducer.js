import { createStore } from 'redux';

let store_0 = createStore(() => {});

let reducer = function (...args) {
  console.log('Reducer was called with args', args);
}

let store_1 = createStore(reducer);