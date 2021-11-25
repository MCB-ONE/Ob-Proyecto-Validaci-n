// Imports de React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Imports de Redux
import { Provider } from 'react-redux';

// Import main component
import App from './components/App';

// Import funtion to create store
import store from './store/config/configureStore';

// Importamos las hojas de estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './styles/css/index.scss';

// TODO: Si trabajamos con Redux, crear el Store y aplicar el middleware de Redux Saga

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root'),
);
