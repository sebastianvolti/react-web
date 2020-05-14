import React from 'react';
import propTypes from 'prop-types';

const AppFrame = ({header, body, footer}) => {
    return (
        <div>
            <div className="app-frame">
                <AppFrame title={header}></AppFrame>
                <div>{body}</div>
                <div>Aplicación simple de ejemplo</div>
            </div>  
        </div>
    );
};

AppFrame.propTypes = {
    header: propTypes.string.isRequired,
    body: propTypes.element.isRequired,
};

export default AppFrame;