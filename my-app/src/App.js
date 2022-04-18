import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  return (
    <Header title='Gustavo' menu={['Inicio' ,'Sobre', 'Comprar', 'Contato']}></Header>
  );
}

export default App;
