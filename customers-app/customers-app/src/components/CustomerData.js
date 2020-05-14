import React from 'react';
import propTypes from 'prop-types';

const CustomerData = ({ name, ci, age }) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del cliente</h2>
                    <div><strong>Nombre</strong><i>{name}</i></div>
                    <div><strong>CI<i>{ci}</i></strong></div>
                    <div><strong>edad<i>{age}</i></strong></div>
            </div>
        </div>
    );
};

CustomerData.propTypes = {
    name: propTypes.string.isRequired,
    ci: propTypes.string.isRequired,
    age: propTypes.number,
};

export default CustomerData;