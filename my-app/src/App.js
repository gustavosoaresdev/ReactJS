import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  return (
    <Header title='Gustavo' links={['Sobre', 'Comprar', 'Contato', 'Endereço']}></Header>
  );
}

export default App;
