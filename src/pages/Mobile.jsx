import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { MobileHeader } from '../components/MobileHeader';

import { Route, Switch, Redirect } from 'react-router-dom';

import { FrostedGlassView } from '../components/FrostedGlassView';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Resume } from '../pages/Resume';
import { Projects } from '../pages/Projects';

import { Footer } from '../components/Footer';

export const Mobile = props => {
    return (
        <div className="mobile-content card">
            <FrostedGlassView bg={props.bg} className="my-glass">
                <MobileHeader />
                <div className="display-content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About mobile />
                        </Route>
                        <Route exact path="/projects">
                            <Projects mobile />
                        </Route>
                        <Route exact path="/resume">
                            <Resume mobile />
                        </Route>
                        <Route exact path="/contact">
                            <Contact mobile />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                    <Footer />
                </div>
            </FrostedGlassView>
        </div>
    );
};
