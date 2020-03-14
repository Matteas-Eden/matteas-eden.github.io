import React from 'react';

import { Grid, Paper } from '@material-ui/core';
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

import '../styles/main.css';

export const Main = () => {
    return (
        <Router>
            <div className="main">
                <Grid container direction="row" align="center" justify="center">
                    <div className="menu">
                        {/* <NavMenu /> */}
                        <p>Hello</p>
                    </div>

                    <div className="content">
                        <Paper className="display-content">
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
                        </Paper>
                    </div>
                </Grid>
            </div>
        </Router>
    );
};
