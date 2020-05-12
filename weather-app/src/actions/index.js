import transformForecast from './../services/transformForecast';
import transformWeather from './../services/transformWeather';
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';

//action creator de setCity
//{ type: 'setCity', value} esto es una action
const setCity = payload => ({ type: SET_CITY, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload});

const api_key = "7b40a381c14bafee46df379cbee5337f"
const url = "http://api.openweathermap.org/data/2.5/forecast"
export const url_weather = "http://api.openweathermap.org/data/2.5/weather"


//el dispatch que aparece como param es gracias a middleware thunk
export const setSelectedCity = payload => {
    return (dispatch, getState) => {    
        const url_forecast = `${url}?q=${payload}&appid=${api_key}&units=metric`;

        //activar en estado un indicador de busqueda de datos
        //establece la ciudad actual en forma asíncrona, y se va a buscar los datos de la misma
        dispatch(setCity(payload))

        //getState obtiene el estado global de la aplicacion
        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;
        const now = new Date();
        if (date && (now-date) < 1 * 60 * 1000){
            return;
        }
        return fetch(url_forecast).then(  //then es asincrono, se ejecuta cuando llega la data del request
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                
                //modificar el estado con el resultado de la promise (del fetch)
                //se establece el resultado del pronostico extendido correspondiente para esa ciudad
                dispatch(setForecastData({city:payload, forecastData}));
            }
        );

    };
};

export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            const api_weather = `${url_weather}?q=${city}&appid=${api_key}&units=metric`;
            fetch(api_weather).then( data => {
                return data.json();
            }).then( weather_data => {
                const weather = transformWeather(weather_data);
                dispatch(setWeatherCity({city, weather}));
            });
        });
    }   

}
