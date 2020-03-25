import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, useMediaQuery } from '@material-ui/core';
import { Menu } from '../components/Menu';
import { Content } from '../components/Content';

import bgImage from '../assets/images/clay-banks-bg.jpg';

import '../styles/Main.scss';

export const Main = () => {
    const matches = useMediaQuery('(min-width:600px) and (min-height:600px)');

    const bgImageValue = `url(${bgImage})`;

    return (
        <Router>
            <div
                className="main has-frosted-glass"
                style={{ backgroundImage: bgImageValue }}
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="center"
                    spacing={10}
                >
                    <Grid item>
                        <Menu bg={bgImageValue} />
                    </Grid>
                    {matches && (
                        <Grid item>
                            <Content bg={bgImageValue} />
                        </Grid>
                    )}
                </Grid>
            </div>
        </Router>
    );
};
