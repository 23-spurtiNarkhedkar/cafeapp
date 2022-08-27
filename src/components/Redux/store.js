// import createstore from redux
import { createStore } from "redux";

// import the main reducer
import rootReducer  from "./Reducers";

const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;