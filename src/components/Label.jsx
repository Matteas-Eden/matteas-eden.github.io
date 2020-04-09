import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import Icon from '@mdi/react';

const useStyles = makeStyles({
    root: {
        border: '1px solid black',
    },
    text: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '2vw',
    },
});

//  className={`{props.className}``_text`}

export const Label = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                {props.img && (
                    <Grid item>
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
        </div>
    );
};
