//reducer de city, nos permite controlar estado de ciudad
//maneja acciones, puede manejar una o varias
//lo ideal es un reducer por cada accion

import {SET_CITY} from './../actions';

export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
            return {...state, city: action.payload}
        default:
            return state;
    }
}

//return {...state, city: action.payload}
//aqui de desglosa el estado inicial(state), y si existe la propiedad city
//se modifica el valor por lo que no viene en action.payload, y si no existe
//la propiedad city se agrega al estado inicial(state)

//state = {}
//esto es para asignar un valor por defecto al estado inicial state por si
//state viene nulo 