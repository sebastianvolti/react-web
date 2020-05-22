import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CustomersListItem = ({ name, editAction, delAction, ci, urlPath}) => {
    return (
        <div>
            <div className="customers-list-item">
                <div className="field">
                    <Link to={`${urlPath}${ci}`}>{name}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${ci}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${ci}/del`}>{delAction}</Link>
                </div>
            </div>
        </div>
    );
};

CustomersListItem.propTypes = {
    name: propTypes.string.isRequired,
    editAction: propTypes.string.isRequired,
    delAction: propTypes.string.isRequired,
    urlPath:  propTypes.string.isRequired,
    ci: propTypes.string.isRequired,
};

export default CustomersListItem;