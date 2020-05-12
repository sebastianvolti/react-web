import {SET_FORECAST_DATA, GET_WEATHER_CITY, SET_WEATHER_CITY} from './../actions';
import { createSelector } from 'reselect';
import toPairs from 'lodash.topairs';

export const cities = (state = {}, action) => {
    switch (action.type) {
        case GET_WEATHER_CITY:{
            const city = action.payload;
            return { ...state, [city]: { ...state[city], weather:null}};
        }
        case SET_WEATHER_CITY:{
            const { city, weather } = action.payload;
            return { ...state, [city]: { ...state[city], weather:weather }};
        }
        case SET_FORECAST_DATA:{
            const {city, forecastData} = action.payload;
            //armo diccionario con forecastData, la clave es la city
            return { ...state, [city]:{ ...state[city], forecastData: forecastData, forecastDataDate: new Date()}};
        }default:
            return state;
    }
}

export const getForecastDataFromCities = (state, city) => state[city] && state[city].forecastData;

const fromObjToArray = cities => (toPairs(cities).map(([key,value]) => ({key:key, name:key, data:value.weather})));

export const getWeatherCities = 
        createSelector(state => fromObjToArray(state), cities => cities);