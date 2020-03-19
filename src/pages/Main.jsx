import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, useMediaQuery } from '@material-ui/core';
import { Menu } from '../components/Menu';
import { Content } from '../components/Content';
import '../styles/Main.scss';

export const Main = () => {
    const matches = useMediaQuery('(min-width:600px) and (min-height:600px)');
    const bgImage = `url(https://images4.alphacoders.com/746/thumb-1920-746386.png)`;

    return (
        <Router>
            <div
                className="main has-frosted-glass"
                style={{ backgroundImage: bgImage }}
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="center"
                    spacing={3}
                >
                    <Menu bg={bgImage} />
                    {matches && <Content bg={bgImage} />}
                </Grid>
            </div>
        </Router>
    );
};
