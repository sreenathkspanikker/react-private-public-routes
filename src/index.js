import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/antd/dist/antd.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/app.scss'
import AppRouter from './Route';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
