import React from 'react';
import { Typography, Button } from '@material-ui/core';

export const MenuItem = props => {
    return (
        <Button
            onClick={() => {
                console.log('Hello, you asked for me?');
            }}
        >
            <Typography>{props.item}</Typography>
        </Button>
    );
};
