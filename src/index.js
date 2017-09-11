import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {addProductById} from './actions';

const store = createStore(rootReducer);
// console.log(store.getState())
// store.subscribe(() =>  console.log ('store ', store.getState()));
// store.dispatch(addProductById(2));

ReactDOM.render(
    <Provider store = {store}>
    <App /> 
    </Provider>, 
    document.getElementById('root')
);