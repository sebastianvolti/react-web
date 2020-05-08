
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers'

//Con esto muestro animacion al inicio
//const initialState = {
//  city : null
//};

//Con esto muestro montevideo al inicio
const initialState = {
  city : "Montevideo,uy"
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));
