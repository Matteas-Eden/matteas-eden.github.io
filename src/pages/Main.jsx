import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, useMediaQuery } from '@material-ui/core';
import { Menu } from '../components/Menu';
import { Content } from '../components/Content';
import '../styles/main.css';

export const Main = () => {
    const matches = useMediaQuery('(min-width:600px) and (min-height:600px)');

    return (
        <Router>
            <div className="main">
                <Grid
                    container
                    direction="row"
                    align="center"
                    justify="center"
                    spacing={3}
                >
                    <Menu />
                    {matches && <Content />}
                </Grid>
            </div>
        </Router>
    );
};
