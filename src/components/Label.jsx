import React from 'react';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import Icon from '@mdi/react';

const useStyles = makeStyles({
    button: {
        border: '1px solid black',
        borderRadius: '0',
        textTransform: 'none',
        height: '9vh',
    },
    text: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '3.5vw',
        marginTop: '-0.5vh',
        marginBottom: '-4vh',
    },
    icon: {
        marginTop: '0.5vh',
        marginLeft: '-0.5vw',
    },
    smallButton: {
        border: '1px solid black',
        borderRadius: '0',
        textTransform: 'none',
        height: '4vh',
        paddingTop: '2vh',
    },
    smallText: {
        fontFamily: 'high-tower',
        color: '#000',
    },
    smallIcon: {
        marginLeft: '-0.5vw',
        marginRight: '0.25vw',
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
            href={'' || props.link}
        >
            <Grid container>
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
                            size={props.small ? '3vh' : '7vh'}
                        />
                    </Grid>
                )}
                <Grid item>
                    <Typography
                        className={
                            props.small ? classes.smallText : classes.text
                        }
                        style={
                            props.img
                                ? {}
                                : {
                                      marginTop: '-1vh',
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
