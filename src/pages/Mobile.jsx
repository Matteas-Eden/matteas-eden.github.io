import React from 'react';
import {
    Grid,
    Typography,
    makeStyles,
    AppBar,
    Select,
    MenuItem,
} from '@material-ui/core';

import { Route, Switch, Redirect } from 'react-router-dom';

import { FrostedGlassView } from '../components/FrostedGlassView';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Resume } from '../pages/Resume';
import { Projects } from '../pages/Projects';

import { Footer } from '../components/Footer';

import { useHistory } from 'react-router-dom';

const MobileHeader = props => {
    let history = useHistory();
    return (
        <AppBar
            position="static"
            color="transparent"
            style={{
                // position: 'absolute',
                // top: '0',
                border: '1px solid black',
                shadows: 'none',
                height: '4vh',
            }}
        >
            <Select
                native
                autoWidth
                defaultValue="Home"
                style={{ height: '4vh' }}
                onChange={event => {
                    let item = event.target.value;
                    console.log(item);
                    if (item === 'Home') history.push('/');
                    else if (item === 'Resumé') history.push('/resume');
                    else history.push('/' + item.toLowerCase());
                }}
            >
                {['Home', 'About', 'Projects', 'Resumé', 'Contact'].map(
                    page => (
                        <option>{page}</option>
                    )
                )}
            </Select>
        </AppBar>
    );
};

export const Mobile = props => {
    return (
        <div className="mobile-content card">
            <FrostedGlassView bg={props.bg} className="my-glass">
                <MobileHeader />
                <div
                    className="display-content"
                    style={{ position: 'absolute', top: '4vh' }}
                >
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
