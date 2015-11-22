var userReducer = function (state = {}, action) {
    console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            }
        default:
            return state;
    }
}
var itemsReducer = function (state = [], action) {
    console.log('itemsReducer was called with state', state, 'and action', action)

    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                action.item
            ]
        default:
            return state;
    }
}

import { createStore, combineReducers } from 'redux'

var reducer = combineReducers({
    user: userReducer,
    items: itemsReducer
})
var store_0 = createStore(reducer)


console.log("\n", '### It starts here')
console.log('store_0 state after initialization:', store_0.getState())



// dispatch action

store_0.dispatch({
    type: 'AN_ACTION'
})
console.log('store_0 state after action AN_ACTION:', store_0.getState())


// action creator
var setNameActionCreator = function (name) {
    return {
        type: 'SET_NAME',
        name: name
    }
}

// dispatch action by action creator
store_0.dispatch(setNameActionCreator('bob'))

console.log('store_0 state after action SET_NAME:', store_0.getState())