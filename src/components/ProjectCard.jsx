import React from 'react';
import { Grid, Typography, makeStyles, useMediaQuery } from '@material-ui/core';
import Icon from '@mdi/react';
import { Label } from './Label';

const useStyles = makeStyles({
    card: {
        border: '1px solid black',
        height: '20vh',
        width: '35vw',
    },
    image: {
        border: '1px solid black',
        margin: '0.5vh 0vh 0vh 0.5vh',
        height: '18vh',
        width: '18vh',
    },
    info: {
        position: 'relative',
        // border: '1px solid green',
        height: '18vh',
        width: '22.5vw',
        marginLeft: '1vh',
    },
    title: {
        position: 'absolute',
        top: '-1.5vh',
        // border: '1px solid purple',
        fontFamily: 'high-tower',
        fontSize: '2.5vw',
        height: '5vh',
        width: '22.5vw',
        color: '#000',
    },
    description: {
        position: 'absolute',
        top: '5vh',
        // border: '1px solid red',
        fontFamily: 'high-tower',
        fontSize: '1.5vw',
        lineHeight: '100%',
        color: '#000',
        height: '5vh',
        width: '22.5vw',
    },
    techLabels: {
        position: 'absolute',
        bottom: '0',
        // border: '1px solid blue',
        height: '4vh',
        width: '22.5vw',
        marginTop: '-3vh',
    },
    label: {
        height: '4vh',
        marginTop: '-1vh',
        marginRight: '1vh',
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
                {props.image && (
                    <img
                        className={classes.image}
                        src={props.image}
                        alt="project-logo"
                    />
                )}
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
                    <Typography className={classes.title}>
                        {props.title}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.description}>
                        {props.description}
                    </Typography>
                </Grid>
                <Grid
                    className={classes.techLabels}
                    item
                    container
                    direction="row"
                    alignItems="flex-start"
                >
                    {props.labels &&
                        props.labels.map(label => (
                            <Grid item className={classes.label}>
                                <Label
                                    small
                                    img={label.icon}
                                    text={label.name}
                                    colour={label.colour}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        </Grid>
    );
};
