import React from 'react';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import Icon from '@mdi/react';

const useStyles = makeStyles({
    button: {
        position: 'relative',
        border: '1px solid black',
        borderRadius: '0',
        textTransform: 'none',
        height: '80%',
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
        // position: 'relative',
        // top: props => (props.img ? '0' : '0.3vmin'),
        // marginTop: props => (props.mobile && props.img ? '-2px' : '0'),
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '3vmin',
        marginTop: '-1vh',
        marginBottom: '-1vh',
        // marginRight: '-1vh',
        // marginLeft: '-0.5vh',
    },
    smallIcon: {
        // position: 'relative',
        // top: '-1vmin',
        // height: '2.75vmin',
        // left: '-1vmin',
    },
});

//  className={`{props.className}``_text`}

/**
 * Props:
 * * text - Text on label
 * * link - Link for label on click
 * * img - Icon for label (optional)
 * * colour/color - Colour of icon (optional, defaults to black)
 */
export const Label = props => {
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
