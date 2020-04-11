import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import ResumeImage from '../assets/images/resume.png';
import ResumeFile from '../assets/resume.pdf';
import { Label } from '../components/Label';
import { mdiDownload } from '@mdi/js';

const useStyles = makeStyles({
    root: {
        position: 'relative',
    },
    text: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '10vmin',
    },
    image: {
        position: 'absolute',
        right: '1vh',
        border: '1px solid black',
        height: '75vh',
    },
});

export const Resume = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                alignItems="stretch"
                justify="flex-start"
            >
                <Grid item>
                    <Typography className={classes.text} variant="h3">
                        Resumé
                    </Typography>
                    {/* <Typography
                        className={classes.text}
                        style={{ fontSize: '5vmin' }}
                        variant="h4"
                    >
                        This page is still under construction.
                    </Typography> */}
                    <Label
                        text="Download"
                        link={ResumeFile}
                        img={mdiDownload}
                    />
                </Grid>
                <Grid item>
                    <img
                        className={classes.image}
                        src={ResumeImage}
                        alt="resumé"
                    />
                </Grid>
            </Grid>
        </div>
    );
};
