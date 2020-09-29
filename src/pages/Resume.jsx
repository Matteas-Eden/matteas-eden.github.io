import React from 'react';
import ModalImage from 'react-modal-image';
import { Grid, Typography, makeStyles, useMediaQuery } from '@material-ui/core';
import ResumeImage from '../assets/images/resume.png';
import ResumeFile from '../assets/resume.pdf';
import { LabelButton } from '../components/LabelButton';
import { mdiDownload } from '@mdi/js';

const useStyles = makeStyles({
    page: {
        position: 'relative',
    },
    text: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '10vmin',
        width: '70vmin',
    },
    image: {
        position: 'fixed',
        right: '5vmin',
        border: '1px solid black',
        height: '77vh',
        marginRight: '-1vh',
    },
    mobileImage: {
        right: '4vmin',
        border: '1px solid black',
        height: '130vmin',
        marginTop: '1vmin',
    },
});

const download = () => {
    const resume = document.getElementById('resume');
    if (resume) {
        resume.href = ResumeFile;
        resume.download = 'MattEdenResume.pdf';
        resume.click();
    }
};

export const Resume = (props) => {
    const classes = useStyles();
    const landscapeMatches = useMediaQuery('(min-aspect-ratio: 1000/750)');

    return (
        <div
            className={classes.page}
            style={{
                overflowY: 'auto',
                overflowX: 'hidden',
                height: props.mobile ? 'calc(90vh - 15vmin - 1vw)' : '70vh',
            }}
        >
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
                        style={{ fontSize: '5vmin' }}
                        variant="h4"
                    >
                        Feel free to look over my experience, education and
                        skillset.
                    </Typography>
                    <br />
                    <LabelButton
                        text="Download PDF"
                        onClick={download}
                        img={mdiDownload}
                        mobile={props.mobile}
                    />
                    <a
                        style={{ visibility: 'hidden', display: 'none' }}
                        id="resume"
                        download="MattEdenResume.pdf"
                        href={ResumeFile}
                    >
                        {'Resume'}
                    </a>
                </Grid>
                <Grid item>
                    <ModalImage
                        className={
                            props.mobile && !landscapeMatches
                                ? classes.mobileImage
                                : classes.image
                        }
                        small={ResumeImage}
                        medium={ResumeImage}
                        alt="Resumé"
                    />
                </Grid>
            </Grid>
        </div>
    );
};
