import React from 'react';
import ReactDOM from 'react-dom';

/* CSS */
import './index.css';


import * as serviceWorker from './serviceWorker';

/* "Sider" */
import App from './App';
import Nav from './Nav';
import Test from './Test';


ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Test />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
