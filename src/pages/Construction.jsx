import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export const Construction = () => {
    return (
        <div className="construction">
            <Grid>
                <Typography
                    variant="h6"
                    style={{
                        paddingLeft: '1em',
                        fontFamily: 'garamond',
                        color: '#000',
                    }}
                >
                    This page is under construction.
                </Typography>
            </Grid>
        </div>
    );
};
