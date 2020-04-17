import React from 'react';
import { Grid, Typography, makeStyles, ButtonBase } from '@material-ui/core';
import { Icon } from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import { Label } from './Label';

const useStyles = makeStyles({
    card: {
        position: 'relative',
        border: '1px solid black',
        minWidth: '35vw',
    },
    image: {
        position: 'relative',
        border: '1px solid black',
        borderRadius: '0',
        margin: '0.5vh 0.5vh 0.5vh 0.5vh',
        padding: '0',
        height: '18vh',
        width: '18vh',
    },
    icon: {
        position: 'absolute',
        top: '0',
        right: '0.5vh',
    },
    info: {
        position: 'relative',
        // border: '1px solid green',
        height: '18vh',
        width: '24vw',
        marginLeft: '1vh',
    },
    title: {
        position: 'absolute',
        top: '-1vh',
        // border: '1px solid purple',
        fontFamily: 'high-tower',
        fontSize: '2.5vw',
        height: '5vh',
        minWidth: '22.5vw',
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
        minWidth: '22.5vw',
    },
    techLabels: {
        position: 'absolute',
        bottom: '0',
        // border: '1px solid blue',
        height: '4vh',
        minWidth: '24vw',
        marginTop: '-3vh',
    },
    label: {
        height: '4vh',
        marginTop: '-1vh',
        marginRight: '1vh',
    },
    // Mobile variant
    mobileCard: {
        position: 'relative',
        border: '1px solid black',
        minWidth: '72.5vmin',
        maxHeight: '22.5vmin',
        width: '90vmin',
    },
    mobileImage: {
        position: 'relative',
        border: '1px solid black',
        borderRadius: '0',
        margin: '0.5vh 0.5vh 0.5vh 0.5vh',
        padding: '0',
        height: '20vmin',
        width: '20vmin',
    },
    mobileInfo: {
        position: 'relative',
        // border: '1px solid green',
        minHeight: '20vmin',
        minWidth: '30vmin',
        maxWidth: '60vmin',
        marginLeft: '1vmin',
    },
    mobileTitle: {
        position: 'absolute',
        top: '0',
        // border: '1px solid purple',
        fontFamily: 'high-tower',
        fontSize: '5vmin',
        maxHeight: '5.5vmin',
        minWidth: '30vmin',
        color: '#000',
    },
    mobileDescription: {
        position: 'absolute',
        top: '7vmin',
        // border: '1px solid red',
        fontFamily: 'high-tower',
        fontSize: '3.5vmin',
        lineHeight: '100%',
        color: '#000',
        minHeight: '5vmin',
        minWidth: '22.5vmin',
    },
    mobileTechLabels: {
        position: 'absolute',
        bottom: '0',
        // border: '1px solid blue',
        height: '4vmin',
        minWidth: '24vmin',
        marginBottom: '0.5vmin',
    },
    mobileLabel: {
        height: '4vmin',
        marginTop: '-0.5vmin',
        marginRight: '1vmin',
    },
});

export const ProjectCard = props => {
    const classes = useStyles(props);

    return (
        <Grid
            className={props.mobile ? classes.mobileCard : classes.card}
            container
            direction="row"
            alignItems="center"
            justify="flex-start"
        >
            <Grid item>
                {props.image && props.mobile ? (
                    <img
                        className={classes.mobileImage}
                        href={props.link}
                        src={props.image}
                        alt="project-logo"
                    />
                ) : (
                    <ButtonBase className={classes.image} href={props.link}>
                        <img src={props.image} alt="project-logo" />
                    </ButtonBase>
                )}
            </Grid>
            <Grid
                item
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                className={props.mobile ? classes.mobileInfo : classes.info}
            >
                <Grid item>
                    <Typography
                        className={
                            props.mobile ? classes.mobileTitle : classes.title
                        }
                    >
                        {props.title}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={
                            props.mobile
                                ? classes.mobileDescription
                                : classes.description
                        }
                    >
                        {props.description}
                    </Typography>
                </Grid>
                <Grid
                    className={
                        props.mobile
                            ? classes.mobileTechLabels
                            : classes.techLabels
                    }
                    item
                    container
                    direction="row"
                    alignItems="flex-start"
                >
                    {props.labels &&
                        props.labels.map(label => (
                            <Grid
                                item
                                className={
                                    props.mobile
                                        ? classes.mobileLabel
                                        : classes.label
                                }
                            >
                                <Label
                                    small
                                    mobile
                                    // img={label.icon}
                                    text={label.name}
                                    colour={label.colour}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Grid>
            <Grid item>
                {props.link && (
                    <a className={classes.icon} href={props.link}>
                        <Icon
                            path={mdiGithub}
                            size={props.mobile ? '3vh' : '4vh'}
                            color="black"
                        />
                    </a>
                )}
            </Grid>
        </Grid>
    );
};
