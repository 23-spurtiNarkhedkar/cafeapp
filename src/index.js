import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import store from store.js for redux
import store from './components/Redux/store';

// redux is used for nig applications otherwise react hooks se bhi kaam chlta
// app aur store ko provide krne ke liye provider use krte
// connecting react to redux now
import {Provider} from 'react-redux';
store.subscribe(()=>console.log(store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider> */}
      {/* now the mian app is in the provider */}
      {/* we have passed the data to the main app using provide i.e we have provided the data to the main app */}
      {/* now the main app / parent has all data and all children can access it */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
