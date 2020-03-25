import React from 'react';

import { NavMenu } from './NavMenu';
import { FrostedGlassView } from './FrostedGlassView';
import { LanguageSwitcher } from './LanguageSwitcher';
import { SignatureCalligraphy } from './SignatureCalligraphy';
import { Construction } from '../pages/Construction';

import { Grid } from '@material-ui/core';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: '1px',
            width: '15rem',
            borderStyle: 'hidden',
        }}
    />
);

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
                    <ColoredLine color="black" />
                    <NavMenu
                        items={['About', 'Projects', 'Resume', 'Contact']}
                    />
                    <ColoredLine color="black" />
                    <Construction />
                </Grid>
            </FrostedGlassView>
        </div>
    );
};
