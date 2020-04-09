import React from 'react';

import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Label } from './Label';
import { mdiGithub, mdiLinkedin, mdiDeviantart } from '@mdi/js';

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
                alignItems="stretch"
                justify="flex-start"
                spacing={1}
            >
                <Grid item>
                    <Label text="GitHub Source" img={mdiGithub} />
                </Grid>
                <Grid item>
                    <Label
                        text="My LinkedIn"
                        img={mdiLinkedin}
                        color="#0073b1"
                    />
                </Grid>
                <Grid item>
                    <Label
                        text="Artist Credit"
                        img={mdiDeviantart}
                        colour="#05cc47"
                    />
                </Grid>
            </Grid>
        </div>
    );
};
