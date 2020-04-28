import React, {Component} from 'react';
import propTypes from 'prop-types';
import ForectastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css'

const data = {
    temperature:10,
    humidity:10,
    weatherState: 'normal',
    wind: 'normal'
}


const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
]

const api_key = "7b40a381c14bafee46df379cbee5337f"
const url = "http://api.openweathermap.org/data/2.5/forecast"

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData : null}
    }

    componentDidMount() {
       this.updateCity(this.props.city)
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.city !== this.props.city) {
            this.setState({forecastData: null}); //para que se vea que esta cambiando de pronostico extendido
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}&units=metric`;
        console.log("hola");
        fetch(url_forecast).then(  //then es asincrono, se ejecuta cuando llega la data del request
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData });
            }
        );
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (
            <ForectastItem 
                key=  {`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}>
            </ForectastItem>
        ));
    }

    renderProgress = () => {
        return <h3>Cargando Pronóstico Extendido..</h3>;
    }

    render(){
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h2 className="forecast-title">Pronostico extendido para {city}</h2>
                {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: propTypes.string.isRequired,
}

export default ForecastExtended;