import React from 'react';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import Icon from '@mdi/react';

const useStyles = makeStyles({
    button: {
        position: 'relative',
        border: '1px solid black',
        borderRadius: '0',
        textTransform: 'none',
        height: '9vh',
    },
    text: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '3.25vw',
    },
    icon: {
        marginLeft: '-0.5vw',
    },
    smallButton: {
        border: '1px solid black',
        borderRadius: '0',
        textTransform: 'none',
        height: '4vmin',
        minWidth: '10vmin',
        paddingTop: '2vmin',
    },
    smallText: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '3vmin',
    },
    smallIcon: {
        marginLeft: '-1vmin',
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
    const classes = useStyles();

    return (
        <Button
            className={props.small ? classes.smallButton : classes.button}
            style={props.mobile ? { maxHeight: '11vmin' } : {}}
            href={'' || props.link}
        >
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-evenly"
            >
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
                            size={props.small ? '3vmin' : '7vmin'}
                        />
                    </Grid>
                )}
                <Grid item>
                    <Typography
                        className={
                            props.small ? classes.smallText : classes.text
                        }
                        style={
                            !props.img && !props.small
                                ? {}
                                : {
                                      marginTop: '-0.5vmin',
                                      //   border: '2px solid green',
                                  }
                        }
                    >
                        {props.text}
                    </Typography>
                </Grid>
            </Grid>
        </Button>
    );
};
