import React from 'react';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import Icon from '@mdi/react';

const useStyles = makeStyles({
    button: {
        position: 'relative',
        border: '1px solid black',
        borderRadius: '0',
        textTransform: 'none',
        maxHeight: '80%',
    },
    text: {
        position: props => (props.mobile ? 'relative' : 'static'),
        top: '2vmin',
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: props => (props.mobile ? '4vmin' : '3.5vw'),
    },
    icon: {
        position: 'relative',
        top: '0.75vw',
        left: '-0.5vw',
    },
    smallButton: {
        border: '1px solid black',
        borderRadius: '0',
        textTransform: 'none',
        height: '3.5vmin',
        minWidth: '1vmin',
    },
    smallText: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '3vmin',
        marginTop: '-1vh',
        marginBottom: '-1vh',
    },
    smallIcon: {
        position: 'absolute',
        left: '0.1vh',
    },
});

/**
 * Props:
 * * text - Text on label
 * * link - Link for label on click
 * * img - Icon for label (optional)
 * * colour/color - Colour of icon (optional, defaults to black)
 */
export const LabelButton = props => {
    const classes = useStyles(props);

    return (
        <Button
            className={props.small ? classes.smallButton : classes.button}
            style={props.mobile && !props.small ? { maxHeight: '11vmin' } : {}}
            href={'' || props.link}
        >
            <Grid container direction="row">
                {props.img && (
                    <Grid
                        item
                        className={
                            props.small ? classes.smallIcon : classes.icon
                        }
                    >
                        <Icon
                            path={props.img}
                            title="label-icon"
                            color={props.colour || props.color || 'black'}
                            size={props.small ? '2.75vmin' : '7vmin'}
                        />
                    </Grid>
                )}
                <Grid item>
                    <Typography
                        className={
                            props.small ? classes.smallText : classes.text
                        }
                    >
                        {props.text}
                    </Typography>
                </Grid>
            </Grid>
        </Button>
    );
};
