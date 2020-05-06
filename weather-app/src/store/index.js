
import { createStore } from 'redux';
import { city } from './../reducers/city'

//Con esto muestro animacion al inicio
//const initialState = {
//  city : null
//};

//Con esto muestro montevideo al inicio
const initialState = {
  city : "Montevideo,uy"
};
export const store = createStore(city, initialState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
