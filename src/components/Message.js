import React from 'react';

const Message = ({ message }) => {
    const messageStyles = {
        padding: '10px',
        marginTop: '10px',
        borderRadius: '5px',
        fontWeight: 'bold',
        position: 'fixed',
        top: '10px',
        right: '10px',
        width: 'auto',
        zIndex: '999',
        maxWidth: '90%',
        boxSizing: 'border-box',
        backgroundColor: '#d4edda',
        color: '#155724',
    };

    return (
        <div style={messageStyles}>
            {message}
        </div>
    );
};

export default Message;
