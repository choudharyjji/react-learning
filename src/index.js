import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/variables.css';
//import './assets/styles/variables-blue.css';
import './assets/styles/main.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
