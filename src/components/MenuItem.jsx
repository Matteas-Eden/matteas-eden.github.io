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
                height: '4rem',
                marginRight: '3em',
            }}
        >
            <Link
                to={props.location}
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
                <Typography
                    style={{ fontFamily: 'high-tower', fontSize: '4rem' }}
                >
                    {props.item}
                </Typography>
            </Link>
        </Button>
    );
};
