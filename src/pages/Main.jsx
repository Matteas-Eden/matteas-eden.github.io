import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, useMediaQuery } from '@material-ui/core';
import { Menu } from '../components/Menu';
import { Content } from '../components/Content';
import { Mobile } from './Mobile';

import bgImage from '../assets/images/TokyoStreet.png';

import '../styles/Main.scss';

export const Main = () => {
    const bgImageValue = `url(${bgImage})`;
    const isMobile = useMediaQuery('(max-aspect-ratio: 7/9)');

    return (
        <Router>
            <div
                className="main has-frosted-glass"
                style={{ backgroundImage: bgImageValue }}
            >
                {isMobile ? (
                    <Mobile bg={bgImageValue} />
                ) : (
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justify="space-around"
                    >
                        <Grid item>
                            <Menu bg={bgImageValue} />
                        </Grid>
                        <Grid item>
                            <Content bg={bgImageValue} />
                        </Grid>
                    </Grid>
                )}
            </div>
        </Router>
    );
};
