import React from 'react';

import { NavMenu } from './NavMenu';
import { FrostedGlassView } from './FrostedGlassView';
import { ColouredLine } from './ColouredLine';
// import { LanguageSwitcher } from './LanguageSwitcher';
import { SignatureCalligraphy } from './SignatureCalligraphy';
import { Construction } from '../pages/Construction';

import { Grid } from '@material-ui/core';

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
                    <SignatureCalligraphy size="15rem" />
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
