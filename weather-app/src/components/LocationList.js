import React from 'react';
import propTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({cities, onSelectedLocation}) => {  

    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city)
    };

    const strToComponents = cities => (
        cities.map(city => 
            (
            <WeatherLocation 
                key={city.key}   //se le agrega key al componente, para que react haga mas eficiente la renderizacion (solo refresca el comp q cambia, sino refresca todo)
                city ={city.name}  //recorre cada una de las city de cities, y se le aplica la func pasada por parametro 
                onWeatherLocationClick={() => handleWeatherLocationClick(city.name)} 
                data={city.data}/>))
    );                                                            
    
    return(
    <div className="locationList">
        {strToComponents(cities)}
    </div>);

};

LocationList.propTypes = {
    cities: propTypes.array.isRequired,
    onSelectedLocation: propTypes.func,
}

export default LocationList;