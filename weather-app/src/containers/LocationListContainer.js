import React, {Component} from 'react'
import propTypes from 'prop-types';
import {connect} from 'react-redux';
//import {setSelectedCity, setWeather} from './../actions';
import * as actions from './../actions';
import {getWeatherCities, getCity} from './../reducers';
import LocationList from './../components/LocationList';
import { bindActionCreators } from 'redux';

class LocationListContainer extends Component {
    componentDidMount(){
        const { setWeather, setSelectedCity, cities, city} = this.props;
        setWeather(cities);
        setSelectedCity(city); //funcion dispatch, nos ayuda a disparar la acción
    }
    handleSelectionLocation = city => {
        this.props.setSelectedCity(city); //funcion dispatch, nos ayuda a disparar la acción
    }
    render() {
        return (
            <LocationList 
                cities={this.props.citiesWeather} 
                onSelectedLocation={this.handleSelectionLocation}>
             </LocationList>
        );

    }

}

LocationListContainer.propTypes = {
    setSelectedCity: propTypes.func.isRequired,
    setWeather: propTypes.func.isRequired,
    cities: propTypes.array.isRequired,
    citiesWeather: propTypes.array,
    city: propTypes.string,
}


//retorna el objeto setCity
//el dispatch llama a nuestro action creator creado

/*
refactor debajo
const mapDispatchToPropsActions = dispatch => ({
    dispatchSetCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)) //nuevo action creator que busca info
});
*/
const mapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});
//connect espera 2 funciones como param, y retorna otra funcion que espera un componente como param
export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);