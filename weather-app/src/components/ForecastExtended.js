import React, {Component} from 'react';
import propTypes from 'prop-types';

class ForecastExtended extends Component {
    render(){
        const {city} = this.props;
    return (<div>Pronostico extendido para {city}</div>);
    }
}

ForecastExtended.propTypes = {
    city: propTypes.string.isRequired,
}

export default ForecastExtended;