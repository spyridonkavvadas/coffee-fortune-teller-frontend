import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/Footer';
import { HashRouter } from 'react-router-dom';  // Import HashRouter

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Footer />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
