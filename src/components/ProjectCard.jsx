import React from 'react';
import { Grid, Typography, makeStyles, useMediaQuery } from '@material-ui/core';
import Icon from '@mdi/react';
import { Label } from './Label';

const useStyles = makeStyles({
    card: {
        border: '1px solid black',
        height: '25vh',
        width: '50vw',
    },
    image: {
        border: '1px solid black',
        margin: '0.5vh 0vh 0vh 0.5vh',
        height: '23vh',
        width: '23vh',
    },
    info: {
        position: 'relative',
        // border: '1px solid green',
        height: '20vh',
        width: '35vw',
        marginTop: '-4vh',
        marginLeft: '1vh',
    },
    title: {
        // border: '1px solid purple',
        fontFamily: 'high-tower',
        fontSize: '3vw',
        height: '6vh',
        width: '30vw',
        color: '#000',
        marginTop: '-1.5vh',
    },
    description: {
        // border: '1px solid red',
        fontFamily: 'high-tower',
        fontSize: '2vw',
        color: '#000',
        height: '7vh',
        width: '30vw',
    },
    labels: {
        position: 'absolute',
        bottom: '-3.5vh',
        border: '1px solid blue',
        height: '4vh',
        width: '30vw',
    },
});

export const ProjectCard = props => {
    const classes = useStyles();

    return (
        <Grid
            className={classes.card}
            container
            direction="row"
            alignItems="center"
            justify="flex-start"
        >
            <Grid item>
                <img
                    className={classes.image}
                    src={props.image}
                    alt="project-logo"
                />
            </Grid>
            <Grid
                item
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                className={classes.info}
            >
                <Grid item>
                    {/* <div className={classes.title} /> */}
                    <Typography className={classes.title}>
                        {props.title}
                    </Typography>
                </Grid>
                <Grid item>
                    {/* <div className={classes.description} /> */}
                    <Typography className={classes.description}>
                        {props.description}
                    </Typography>
                </Grid>
                <Grid item xs container>
                    <div className={classes.labels} />
                    {/* {props.labels.map(label => (
                        <Grid item>
                            <Label img={label.icon} text={label.name} />
                        </Grid>
                    ))} */}
                </Grid>
            </Grid>
        </Grid>
    );
};
