import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getForecastDataFromCities, getCity } from './../reducers';
import ForecastExtended from '../components/ForecastExtended';
import AnimationMain from './../animation/AnimationMain'

class ForecastExtendedContainer extends Component {
    render() {
        const {city, forecastData} = this.props;
        return (
             city === null ? <AnimationMain/> :  <ForecastExtended city={city} forecastData={forecastData}/>
        );
    }
}

//forma larga
//const mapStateToProps = state => ({city : state.city});

//forma corta
const mapStateToProps = state => ({city: getCity(state), forecastData: getForecastDataFromCities(state)});

ForecastExtendedContainer.propTypes = {
    city: propTypes.string.isRequired,
    forecastData: propTypes.array,
};

export default connect(
    mapStateToProps, null
)(ForecastExtendedContainer);