import React, {Component} from 'react'
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {setCity} from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    handleSelectionLocation = city => {
        this.props.dispatchSetCity(city); //funcion dispatch, nos ayuda a disparar la acción
    }
    render() {
        return (
            <LocationList 
                cities={this.props.cities} 
                onSelectedLocation={this.handleSelectionLocation}>
             </LocationList>
        );

    }

}

LocationListContainer.propTypes = {
    setCity: propTypes.func.isRequired,
    cities: propTypes.array.isRequired,
}


//retorna el objeto setCity
//el dispatch llama a nuestro action creator creado, llamado setCity
const mapDispatchToPropsActions = dispatch => ({
    dispatchSetCity: value => dispatch(setCity(value))
  });
  
//connect espera 2 funciones como param, y retorna otra funcion que espera un componente como param
export default connect(null, mapDispatchToPropsActions)(LocationListContainer);