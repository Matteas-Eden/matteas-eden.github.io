import React from 'react';
import { Typography, Button } from '@material-ui/core';

export const MenuItem = props => {
    return (
        <Button
            onClick={() => {
                console.log('Hello, you asked for me?');
            }}
            style={{
                textTransform: 'none',
                height: '4rem',
                marginRight: '3em',
            }}
        >
            <Typography style={{ fontFamily: 'high-tower', fontSize: '4rem' }}>
                {props.item}
            </Typography>
        </Button>
    );
};
