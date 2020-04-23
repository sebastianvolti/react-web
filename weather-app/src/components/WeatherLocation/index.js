import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import propTypes from 'prop-types';
//import {api_weather} from './../../constants/api_url'
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather'
import './styles.css';

//Componente de Clase
class WeatherLocation extends Component {
    
    //Primer lugar por donde pasa el componente
    constructor(props) {
        super(props);
        const { city } = props;
        //Estado del componente, para renderización
        //this.state solo se usa en constructor, para actualizar llamo a this.setState()
        this.state = {
            city: city, //si el atributo tiene el mismo nombre, solo poniendo city basta.
            data: null,
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateWeather();
    }

    
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    handleUpdateWeather = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
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
        const {onWeatherLocationClick} = this.props;
        const { city, data } = this.state;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city={city}></Location> 
            {data ? <WeatherData data={data}></WeatherData> : <CircularProgress/>}
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

WeatherLocation.propTypes = {
    city: propTypes.string.isRequired,
    onWeatherLocationClick: propTypes.func,
}

export default WeatherLocation;