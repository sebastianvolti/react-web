import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from '../components/ForecastExtended';
import AnimationMain from './../animation/AnimationMain'
class ForecastExtendedContainer extends Component {
    render() {
        return (
             this.props.city === null ? <AnimationMain/> :  <ForecastExtended city={this.props.city}/>
        );
    }
}

//forma larga
//const mapStateToProps = state => ({city : state.city});

//forma corta
const mapStateToProps = ({city}) => ({city});

ForecastExtendedContainer.propTypes = {
    city: propTypes.string.isRequired,
};

export default connect(
    mapStateToProps, null
)(ForecastExtendedContainer);