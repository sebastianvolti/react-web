import { combineReducers } from 'redux';
// alias en getForecastDataFromCities para poder importarla, ya que tiene mismo nombre
import { cities, getForecastDataFromCities as _getForecastDataFromCities } from './cities';
import { city } from './city';

export default combineReducers({
   cities,
   city
});

//selector1 
export const getCity = state => state.city;
//selector2 
export const getForecastDataFromCities = state => (_getForecastDataFromCities(state.cities, getCity(state)));