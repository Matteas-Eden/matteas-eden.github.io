import React from 'react';

import { NavMenu } from './NavMenu';
import { FrostedGlassView } from './FrostedGlassView';
import { LanguageSwitcher } from './LanguageSwitcher';
import { SignatureCalligraphy } from './SignatureCalligraphy';

import { Grid } from '@material-ui/core';

export const Menu = props => {
    return (
        <div className="menu bg has-frosted-glass">
            <FrostedGlassView bg={props.bg} className="my-glass">
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                    spacing={3}
                >
                    <SignatureCalligraphy size="8em" />
                    <NavMenu
                        items={['About', 'Projects', 'My CV', 'Contact']}
                    />
                </Grid>
            </FrostedGlassView>
        </div>
    );
};
