import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';
import { Label } from './Label';
import { mdiGithub, mdiLinkedin, mdiDeviantart } from '@mdi/js';

const useStyles = makeStyles({
    root: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '2vw',
    },
    label: {
        height: '10vh',
        marginLeft: '-1.5vh',
        marginTop: '0.5vh',
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
                paddingRight: '-1vw',
            }}
        >
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="flex-start"
                spacing={2}
            >
                <Grid item className={classes.label}>
                    <Label
                        text="Site Source"
                        img={mdiGithub}
                        link="https://www.github.com/matteas-eden/matteas-eden.github.io"
                    />
                </Grid>
                <Grid item className={classes.label}>
                    <Label
                        text="Visit LinkedIn"
                        img={mdiLinkedin}
                        link="https://www.linkedin.com/in/matteas-eden"
                        color="#0073b1"
                    />
                </Grid>
                <Grid item className={classes.label}>
                    <Label
                        text="Artist Credit"
                        img={mdiDeviantart}
                        link="https://www.deviantart.com/arsenixc"
                        colour="#05cc47"
                    />
                </Grid>
            </Grid>
        </div>
    );
};
