import React from 'react';
import propTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

const ForecastItem = ({weekDay, hour, data}) => (
    <div>
        <h2>{weekDay} - {hour} hs</h2>
        <WeatherData data={data}></WeatherData>
    </div>
);

ForecastItem.propTypes = {
    weekDay: propTypes.string.isRequired,
    hour: propTypes.number.isRequired,
    data: propTypes.shape({
        temperature: propTypes.number.isRequired,
        weatherState: propTypes.string.isRequired,
        humidity: propTypes.number.isRequired,
        wind: propTypes.string.isRequired,
    }),
}

export default ForecastItem;