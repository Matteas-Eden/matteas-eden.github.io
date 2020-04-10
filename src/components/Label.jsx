import React from 'react';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';

const useStyles = makeStyles({
    root: {
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
        // marginRight: '-0.5vw',
        // marginLeft: '-0.25vw',
    },
    icon: {
        marginTop: '0.5vh',
        marginLeft: '-0.5vw',
    },
});

//  className={`{props.className}``_text`}

export const Label = props => {
    const classes = useStyles();

    return (
        <Button className={classes.root} href={props.link}>
            <Grid container>
                {props.img && (
                    <Grid item className={classes.icon}>
                        <Icon
                            path={props.img}
                            title="label-icon"
                            color={props.colour || props.color || 'black'}
                            size={'7vh'}
                        />
                    </Grid>
                )}
                <Grid item>
                    <Typography className={classes.text}>
                        {props.text}
                    </Typography>
                </Grid>
            </Grid>
        </Button>
    );
};
