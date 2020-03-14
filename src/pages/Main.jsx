import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

// import { NavMenu } from '../components/NavMenu';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { CV } from './CV';
import { Projects } from './Projects';

// import { ReactComponent as Logo } from '../assets/images/SignatureBasic.svg';
import { SignatureBasic } from '../components/SignatureBasic';
import { SignatureCalligraphy } from '../components/SignatureCalligraphy';
import '../styles/main.css';

export const Main = () => {
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
                    <div className="menu">
                        <Typography variant="h3">Menu</Typography>
                        <SignatureBasic size="10em" />
                        <SignatureCalligraphy size="10em" />
                        {/* <NavMenu /> */}
                    </div>

                    <div className="content">
                        <div className="display-content">
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route exact path="/about">
                                    <About />
                                </Route>
                                <Route exact path="/projects">
                                    <Projects />
                                </Route>
                                <Route exact path="/cv">
                                    <CV />
                                </Route>
                                <Route exact path="/contact">
                                    <Contact />
                                </Route>
                                <Redirect to="/" />
                            </Switch>
                        </div>
                    </div>
                </Grid>
            </div>
        </Router>
    );
};
