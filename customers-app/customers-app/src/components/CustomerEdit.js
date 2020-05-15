import React from 'react';
import propTypes from 'prop-types';

const CustomerEdit = ({name, ci, age}) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <h3>Nombre:{name} / CI:{ci} / Edad:{age} </h3>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: propTypes.string,
    ci: propTypes.string,
    age: propTypes.number,
};

export default CustomerEdit;