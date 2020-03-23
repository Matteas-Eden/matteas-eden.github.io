import React from 'react';
import { Typography, Button } from '@material-ui/core';

export const MenuItem = props => {
    return (
        <Button
            onClick={() => {
                console.log('Hello, you asked for me?');
            }}
            style={{ textTransform: 'none', height: '3em' }}
        >
            <Typography
                variant="h6"
                style={{ fontFamily: 'high-tower', fontSize: 40 }}
            >
                {props.item}
            </Typography>
        </Button>
    );
};
