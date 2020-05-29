import React from 'react';
import propTypes from 'prop-types';
import AppHeader from './AppHeader'

const AppFrame = ({header, body, footer}) => {
    return (
        <div>
            <div className="app-frame">
                <AppHeader title={header}></AppHeader>
                <div>{body}</div>
            </div>  
        </div>
    );
};

AppFrame.propTypes = {
    header: propTypes.string.isRequired,
    body: propTypes.element.isRequired,
};

export default AppFrame;
