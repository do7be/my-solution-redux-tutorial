import { createStore } from 'redux';

// sample 0 simple
let reducer_0 = function (state, action) {
  console.log('reducer_0 was called with state', state, 'and action', action);
}

let store_0 = createStore(reducer_0);

console.log('store_0 state after initialization:', store_0.getState());


// sample 1 state return object
let reducer_1 = function (state, action) {
  console.log('reducer_1 was called with state', state, 'and action', action);
  if (typeof state === 'undefined') {
    return {};
  }

  return state;
}

let store_1 = createStore(reducer_1);

console.log('store_1 state after initialization:', store_1.getState());


// sample 2 state default param
let reducer_2 = function (state = {}, action) {
    console.log('reducer_2 was called with state', state, 'and action', action);

    return state;
}

let store_2 = createStore(reducer_2);

console.log('store_2 state after initialization:', store_2.getState());


// sample 3 add action
let reducer_3 = function (state = {}, action) {
    console.log('reducer_3 was called with state', state, 'and action', action);

    switch (action.type) {
        case 'SAY_SOMETHING':
            return {
                ...state,
                message: action.value
            };
        default:
            return state;
    }
}

let store_3 = createStore(reducer_3);

console.log('store_3 state after initialization:', store_3.getState());