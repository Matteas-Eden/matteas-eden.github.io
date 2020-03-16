import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { CV } from '../pages/CV';
import { Projects } from '../pages/Projects';

export const Content = () => {
    return (
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
    );
};
