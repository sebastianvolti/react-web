import React from 'react';
import propTypes from 'prop-types';

//children es de tipo nodo, soporta cualquier componente de react que sea renderizable
const CustomersActions = ({ children }) => {
    return (
        <div>
            <div className="customers-actions">
                <div>{children}</div> 
            </div>
        </div>
    );
};

CustomersActions.propTypes = {
    children: propTypes.node.isRequired,
};

export default CustomersActions;