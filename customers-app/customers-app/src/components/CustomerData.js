import React from 'react';
import propTypes from 'prop-types';
import CustomersActions from './CustomersActions';

const CustomerData = ({ name, ci, age, onBack }) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del cliente</h2>
                <div><strong>Nombre: <i>{name}</i></strong></div>
                <div><strong>CI: <i>{ci}</i></strong></div>
                <div><strong>Edad: <i>{age}</i></strong></div>
            </div>
            <CustomersActions>
                <button onClick={onBack}>Volver</button>
            </CustomersActions>
        </div>
      
    );
};

CustomerData.propTypes = {
    name: propTypes.string.isRequired,
    ci: propTypes.string.isRequired,
    age: propTypes.number,
    onBack: propTypes.func.isRequired
};

export default CustomerData;