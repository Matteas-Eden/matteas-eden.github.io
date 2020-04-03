import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Label } from './Label';
import logo from '../logo.svg';
import { SignatureBasic } from './SignatureBasic';
import TokyoStreet from '../assets/images/TokyoStreet.png';

const useStyles = makeStyles({
    root: {
        fontFamily: 'high-tower',
        color: '#000',
        // fontSize: '1vmin',
    },
});

export const ProjectCard = props => {
    const classes = useStyles();

    return (
        <div
            style={{
                outline: '1px solid black',
                // width: '25rem',
                // height: '6rem',
                width: '100vh',
                height: '25vh',
                minHeight: '6rem',
                minWidth: '20rem',
            }}
        >
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="flex-start"
            >
                <Grid item>
                    <div className="project-image" style={{ height: '6rem' }}>
                        <img
                            style={{
                                // margin: '0.5rem',
                                margin: '1vh 1vh 1vh 1vh',
                                // maring: '1rem 1rem 1rem 1rem',
                                outline: '0.1vh solid black',
                                minWidth: '5rem',
                                minHeight: '5rem',
                                width: '23vh',
                                height: '23vh',
                                maxHeight: '30vh',
                                maxWidth: '30vh',
                            }}
                            src={TokyoStreet}
                            alt="project"
                        />
                    </div>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        alignItems="stretch"
                        justify="center"
                    >
                        <div
                            className="project-overview"
                            style={{
                                // height: '6rem',
                                // width: '19rem',
                                width: '20vw',
                            }}
                        >
                            {/* <Grid item xs={3}>
                                <Typography
                                    className={classes.root}
                                    variant="h5"
                                    // style={{ marginTop: '-0.1em' }}
                                >
                                    {props.title}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography
                                    className={classes.root}
                                    // variant="body2"
                                    style={{
                                        fontSize: '0.8rem',
                                        wordWrap: 'break-word',
                                        marginTop: '-0.5em',
                                    }}
                                >
                                    {props.description}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Label
                                    text="Test"
                                    image={logo}
                                    height="0.5em"
                                    width="3em"
                                />
                            </Grid> */}
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};
