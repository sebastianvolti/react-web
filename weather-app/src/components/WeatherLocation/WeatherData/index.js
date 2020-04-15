import React from 'react';
import propTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';


const WeatherData = ({data : {temperature,weatherState,humidity,wind}}) => {
    return( <div className="weatherDataCont">
        <WeatherTemperature temperature={temperature}
                            weatherState={weatherState}
        />
        <WeatherExtraInfo humidity={humidity} wind={wind} ></WeatherExtraInfo>
    </div>);
    
};

WeatherData.propTypes = {
    data: propTypes.shape({
        temperature: propTypes.number.isRequired,
        weatherState: propTypes.string.isRequired,
        humidity: propTypes.number.isRequired,
        wind: propTypes.string.isRequired,
    }),
};

export default WeatherData;