import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const MenuItem = props => {
    return (
        <Button
            onClick={() => {
                console.log('Hello, you asked for me?');
            }}
            style={{
                textTransform: 'none',
                height: '11vmin',
            }}
            component={Link}
            to={props.location}
        >
            <Typography
                style={{
                    fontFamily: 'high-tower',
                    fontSize: '10vmin',
                    marginLeft: '-0.5vmin',
                }}
            >
                {props.item}
            </Typography>
        </Button>
    );
};
