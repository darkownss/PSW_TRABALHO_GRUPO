import React from 'react';
import './scss/main.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/home/home.js';
import Header from './components/Header/header.js';

function App() {
  return (
      <>
        <Header></Header>
        <Home></Home>
      </>
  );
}

export default App;
