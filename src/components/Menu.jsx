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
                <Button
                    component={Link}
                    to="/"
                    style={{ width: '20vw', position: 'relative', left: '0' }}
                >
                    <SignatureCalligraphy size="35vh" />
                </Button>
                <NavMenu
                    items={[
                        {
                            text: 'About',
                            location: '/about',
                        },
                        {
                            text: 'Projects',
                            location: '/projects',
                        },
                        {
                            text: 'Resumé',
                            location: '/resume',
                        },
                        {
                            text: 'Contact',
                            location: '/contact',
                        },
                    ]}
                />
                <div style={{ position: 'relative', top: '45vh' }}>
                    <Construction />
                </div>
            </FrostedGlassView>
        </div>
    );
};
