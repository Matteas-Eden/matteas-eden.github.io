import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '10vmin',
    },
});

export const Resume = () => {
    const classes = useStyles();

    return (
        <Typography className={classes.root} variant="h3">
            Resumé
        </Typography>
    );
};
