import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';

/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
const App = () => {
    return (
      <div className="app">
        <AppLayout />
      </div>
    );
};

export default App;
