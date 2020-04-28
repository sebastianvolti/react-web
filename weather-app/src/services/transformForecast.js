import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

const transformForecast = data => (
    data.list.filter(item => (                  //para asegurar func en paises con horario utc no multiplo de 3, modificar a 
        moment.unix(item.dt).hour() === 6 ||    //moment.unix(item.dt).utc().hour ===6
        moment.unix(item.dt).hour() === 12 || 
        moment.unix(item.dt).hour() === 18 
    )).map(item => (
        {
            weekDay: moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }
    ))  
);

export default transformForecast;