import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { FrostedGlassView } from '../components/FrostedGlassView';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Resume } from '../pages/Resume';
import { Projects } from '../pages/Projects';

export const Content = props => {
    return (
        <div className="content card">
            <FrostedGlassView bg={props.bg} className="my-glass">
                <div className="display-content">
                    <Switch>
                        <Route exact path="/">
                            <Projects />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/projects">
                            <Projects />
                        </Route>
                        <Route exact path="/resume">
                            <Resume />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </div>
            </FrostedGlassView>
        </div>
    );
};
