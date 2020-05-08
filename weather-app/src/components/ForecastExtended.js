import React from 'react';
import propTypes from 'prop-types';
import ForectastItem from './ForecastItem';
import './styles.css'

const renderForecastItemDays = (forecastData) => {
    return forecastData.map(forecast => (
        <ForectastItem 
            key=  {`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}>
        </ForectastItem>
    ));
}

const renderProgress = () => {
    return <h3>Cargando Pronóstico Extendido..</h3>;
}

const ForecastExtended = ({ city, forecastData}) => (
            <div>
                <h2 className="forecast-title">Pronostico extendido para {city}</h2>
                {forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
            </div>
    
   
)

ForecastExtended.propTypes = {
    city: propTypes.string.isRequired,
    forecastData: propTypes.array,
}

export default ForecastExtended;