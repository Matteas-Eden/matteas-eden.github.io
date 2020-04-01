import React from 'react';

import { NavMenu } from './NavMenu';
import { FrostedGlassView } from './FrostedGlassView';
import { ColouredLine } from './ColouredLine';
// import { LanguageSwitcher } from './LanguageSwitcher';
import { SignatureCalligraphy } from './SignatureCalligraphy';
import { Construction } from '../pages/Construction';

import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Menu = props => {
    return (
        <div className="menu card">
            <FrostedGlassView bg={props.bg} className="my-glass">
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                    spacing={3}
                >
                    <Button
                        component={Link}
                        to="/"
                        onClick={console.log('CLICK')}
                    >
                        <SignatureCalligraphy size="15rem" />
                    </Button>
                    <ColouredLine color="black" />
                    {/* <NavMenu
                        items={['About', 'Projects', 'Resume', 'Contact']}
                    /> */}
                    <NavMenu />
                    <ColouredLine color="black" />
                    <Construction />
                </Grid>
            </FrostedGlassView>
        </div>
    );
};
