import React from 'react';
import propTypes from 'prop-types';
import CustomersActions from './CustomersActions';

const CustomerData = ({ id,  name, ci, age, onBack, isDeleteAllow, onDelete }) => {
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
                {isDeleteAllow &&  <button onClick={() => onDelete(id)}>Eliminar</button>}
            </CustomersActions>
        </div>
      
    );
};

CustomerData.propTypes = {
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    ci: propTypes.string.isRequired,
    onBack: propTypes.func.isRequired,
    isDeleteAllow: propTypes.bool,
    onDelete: propTypes.func,
};

export default CustomerData;