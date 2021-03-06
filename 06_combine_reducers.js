var reducer_0 = function (state = {}, action) {
  console.log('reducer_0 was called with state', state, 'and action', action);

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

var reducer_1 = function (state = {}, action) {
  console.log('reducer_1 was called with state', state, 'and action', action);

  switch (action.type) {
    case 'SAY_SOMETHING':
      return {
        ...state,
        message: action.value
      };
    case 'DO_SOMETHING':
      // ...
    case 'LEARN_SOMETHING':
      // ...
    case 'HEAR_SOMETHING':
      // ...
    case 'GO_SOMEWHERE':
      // ...
    // etc.
    default:
      return state;
  }
}


var userReducer = function (state = {}, action) {
    console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        default:
            return state;
    }
}
var itemsReducer = function (state = [], action) {
    console.log('itemsReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        default:
            return state;
    }
}


import { createStore, combineReducers } from 'redux';

var reducer = combineReducers({
    user: userReducer,
    items: itemsReducer
});

var store_0 = createStore(reducer);

console.log('store_0 state after initialization:', store_0.getState());