import React from 'react';
import PropTypes from 'prop-types';

const Toaster = ({ message, onClose }) => {
    return (
        <div className="toaster">
            <div className="toaster-content">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

Toaster.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Toaster;
