import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export const Construction = () => {
    return (
        <div className="construction">
            <Grid>
                <Typography
                    variant="h5"
                    style={{
                        marginLeft: '1vh',
                        fontFamily: 'high-tower',
                        color: '#000',
                    }}
                >
                    This page is under construction.
                </Typography>
            </Grid>
        </div>
    );
};
