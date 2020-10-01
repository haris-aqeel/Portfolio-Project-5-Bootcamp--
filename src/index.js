import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      
        <App />
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
