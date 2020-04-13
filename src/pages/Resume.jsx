import React from 'react';
import ModalImage from 'react-modal-image';
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
        position: 'fixed',
        right: '4vh',
        border: '1px solid black',
        height: '77vh',
        marginRight: '-1vh',
        marginTop: '-1vh',
    },
});

export const Resume = props => {
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
                    {!props.mobile && (
                        <Typography className={classes.text} variant="h3">
                            Looking to hire?
                        </Typography>
                    )}
                    <Typography
                        className={classes.text}
                        style={{ fontSize: '5vmin', width: '75vh' }}
                        variant="h4"
                    >
                        Feel free to look over my experience, education and
                        skillset.
                    </Typography>
                    <br />
                    <Label
                        text="Download PDF"
                        link={ResumeFile}
                        img={mdiDownload}
                    />
                </Grid>
                <Grid item>
                    <ModalImage
                        className={classes.image}
                        small={ResumeImage}
                        medium={ResumeImage}
                        alt="Resumé"
                    />
                </Grid>
            </Grid>
        </div>
    );
};
