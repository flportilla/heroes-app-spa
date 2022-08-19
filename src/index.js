import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from "react-router-dom";

import { HeroesApp } from './HeroesApp';

//@ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <React.StrictMode>
      <Router>
        <HeroesApp />
      </Router>
    </React.StrictMode>
  </>

);

