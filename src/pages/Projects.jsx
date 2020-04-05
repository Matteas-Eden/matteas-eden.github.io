import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '10vmin',
    },
});

export const Projects = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.root} variant="h3">
                Projects
            </Typography>
            <Typography
                className={classes.root}
                style={{ fontSize: '5vmin' }}
                variant="h4"
            >
                This page is still under construction.
            </Typography>
        </div>
    );
};
