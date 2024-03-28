import React from 'react';
import './scss/main.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/home/home.js';
import Header from './components/Header/header.js';
import { CarrinhoProvider } from './context/CarrinhoContext.js';


function App() {
  return (
      <>
        <CarrinhoProvider /* Teria que usar onde tem o router, assim todo mundo 
                            teria acesso ao carrinho e seus items */> 
          <Header></Header>
          <Home></Home>
        </CarrinhoProvider>
      </>
  );
}

export default App;
