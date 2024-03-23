import React from 'react';
import './scss/main.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './home/home';
import Header from './Header/header';

function App() {
  return (
      <>
        <Header></Header>
        <Home></Home>
      </>
  );
}

export default App;
