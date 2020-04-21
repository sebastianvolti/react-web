import React, { Component } from 'react';
import {api_weather} from './../../constants/api_url'
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather'
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from '../../constants/weathers'

const data = {
    temperature: 5,
    weatherState: RAIN,
    humidity: 10,
    wind: '10 m/s',
}

//Componente de Clase
class WeatherLocation extends Component {
    
    //Primer lugar por donde pasa el componente
    constructor() {
        super();
        //Estado del componente, para renderización
        //this.state solo se usa en constructor, para actualizar llamo a this.setState()
        this.state = {
            city: 'Montevideo, Uy',
            data: data,
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);

            this.setState({
                data: newWeather
            });
        });

    }

    render(){
        const { city, data } = this.state;
        return(
            <div className="weatherLocationCont">
            <Location city={city}></Location> 
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
        );
    }
}

//Componente Funcional
//const WeatherLocation = () => (
//    <div className="weatherLocationCont">
//        <Location city={"Montevideo,Uy"}></Location> 
//        <WeatherData data={data}></WeatherData>
//    </div>
//);


export default WeatherLocation;