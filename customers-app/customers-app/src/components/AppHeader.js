import React from 'react';
import propTypes from 'prop-types';

const AppHeader = props => {
    return (
        <div>
            <div className="app-header">
                <h1>{props.title}</h1>               
            </div>      
        </div>
    );
};

AppHeader.propTypes = {
    title: propTypes.string.isRequired,
};
    
export default AppHeader;