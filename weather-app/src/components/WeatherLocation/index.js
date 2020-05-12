import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import propTypes from 'prop-types';
//import {api_weather} from './../../constants/api_url'
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather'
import './styles.css';


const WeatherLocation = ({onWeatherLocationClick, city, data}) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location> 
        {data ? <WeatherData data={data}></WeatherData> : <CircularProgress/>}
    </div>
);



WeatherLocation.propTypes = {
    city: propTypes.string.isRequired,
    onWeatherLocationClick: propTypes.func,
    data: propTypes.shape({
        temperature: propTypes.number.isRequired,
        weatherState: propTypes.string.isRequired,
        humidity: propTypes.number.isRequired,
        wind: propTypes.string.isRequired,
    }),
}

export default WeatherLocation;