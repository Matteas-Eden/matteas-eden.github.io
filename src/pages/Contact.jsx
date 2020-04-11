import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        textTransform: 'none',
    },
    text: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '10vmin',
    },
});

export const Contact = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.text} variant="h3">
                Get in touch!
            </Typography>
            <Typography
                className={classes.text}
                style={{ fontSize: '5vmin' }}
                variant="h4"
            >
                Feel free to reach out to me via LinkedIn, email or by filling
                out the form below.
            </Typography>
        </div>
    );
};
