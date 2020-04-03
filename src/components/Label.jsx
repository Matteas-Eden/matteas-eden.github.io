import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export const Label = props => {
    return (
        <div
            style={{
                height: props.height,
                width: props.width,
                outline: '1px solid black',
            }}
        >
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="flex-start"
            >
                <Grid item xs>
                    {/* <div
                        style={{
                            margin: '0.25rem',
                            height: '0.5rem',
                            width: '0.5rem',
                            outline: '1px solid black',
                        }}
                    > */}
                    <img src={props.image} width="25" alt="project label" />
                    {/* </div> */}
                </Grid>
                <Grid item xs>
                    <Typography style={{ fontSize: props.height }}>
                        {props.text}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};
