import React from 'react';
import propTypes from 'prop-types';
import CustomersListItem from './CustomersListItem';

const CustomersList = ({ customers, urlPath }) => {
    return (
        <div>
            <div className="customers-list">
                {
                    customers.map (
                        c => <CustomersListItem
                                key={c.ci}
                                ci={c.ci}
                                name={c.name}
                                editAction={'Editar'}
                                delAction={'Eliminar'}
                                urlPath={urlPath}>
                             </CustomersListItem>
                    )
                }
            </div>
        </div>
    );
};

CustomersList.propTypes = {
    customers: propTypes.array.isRequired,
    urlPath: propTypes.string.isRequired,
};

export default CustomersList;