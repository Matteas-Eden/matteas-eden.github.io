import React from 'react';

export const ColouredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: '1px',
            width: '15rem',
            borderStyle: 'hidden',
        }}
    />
);
