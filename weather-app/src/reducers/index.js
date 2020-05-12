import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
// alias en getForecastDataFromCities para poder importarla, ya que tiene mismo nombre
import { cities, 
   getForecastDataFromCities as _getForecastDataFromCities, 
   getWeatherCities as _getWeatherCities} from './cities';
import { city } from './city';

export default combineReducers({
   cities,
   city
});

//selector1 
export const getCity = state => state.city;
//selector2 
export const getForecastDataFromCities = state => (_getForecastDataFromCities(state.cities, getCity(state)));
//selector 3
export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities);