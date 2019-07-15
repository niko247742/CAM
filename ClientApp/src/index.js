import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
     </ReduxProvider>,
  rootElement);

registerServiceWorker();
