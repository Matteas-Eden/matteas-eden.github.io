import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import { FrostedGlassView } from '../components/FrostedGlassView';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Resume } from '../pages/Resume';
import { Projects } from '../pages/Projects';

import { Footer } from '../components/Footer';

export const Content = props => {
    return (
        <Router>
            <div className="content card">
                <FrostedGlassView bg={props.bg} className="my-glass">
                    <div className="display-content">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route
                                exact
                                path="/projects"
                                component={Projects}
                            />
                            <Route exact path="/resume" component={Resume} />
                            <Route exact path="/contact" component={Contact} />
                            <Redirect to="/" />
                        </Switch>
                        <Footer />
                    </div>
                </FrostedGlassView>
            </div>
        </Router>
    );
};
