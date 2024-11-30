import React from 'react';
import ListLivre from './components/ListLivre';
import LivresEmpruntes from './components/LivresEmpruntes';
import { EmpruntProvider } from './context/EmpruntContext';

const App = () => {
  return (
    <EmpruntProvider>
      <div>
        <h1>Application de Gestion des Emprunts</h1>
        <ListLivre />
        <LivresEmpruntes />
      </div>
    </EmpruntProvider>
  );
};

export default App;
