import React from 'react';

import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '2vw',
    },
});

export const Footer = () => {
    const classes = useStyles();

    return (
        <div
            style={{
                width: '74vw',
                height: '10vh',
                borderTop: '1px solid black',
                position: 'fixed',
                bottom: '5vh',
                marginLeft: '-1vw',
                paddingLeft: '1vw',
            }}
        >
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
            >
                <Grid item xs>
                    <Typography className={classes.root}>
                        GitHub Source
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Typography className={classes.root}>
                        See LinkedIn
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Typography className={classes.root}>
                        Artist Credit
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};
