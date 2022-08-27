// main reducers is passed into the store
// thier can be many reducers 
// in index.js thier will be only one main reducer within which all reducers will be present

// action telss what will happen
// reducers will tell how it happened
// store will

// import the reducer function
import changeTheNumFunc from './UpDown';

// import combineReducers
import { combineReducers } from 'redux';

// create a root reducer function wherein add other reducer fucntion

const rootReducer=combineReducers({
    changeTheNumFunc
});

export default rootReducer;