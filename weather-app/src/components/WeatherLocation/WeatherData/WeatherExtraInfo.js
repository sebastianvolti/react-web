import React from 'react';
import './styles.css';
const WeatherExtraInfo = ({humidity,wind}) => (
    <div className="weatherExtraInfoCont">
        <span>{humidity + "% -"}</span>
        <span>{`${wind} viento`}</span>
    </div>
);


export default WeatherExtraInfo;
