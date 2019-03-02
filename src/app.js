import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetParkings } from './actions/parkings';
import 'normalize.css/normalize.css'; 
import './styles/styles.scss';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.dispatch(startSetParkings()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});