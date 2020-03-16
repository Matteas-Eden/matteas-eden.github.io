import React from 'react';
import MenuItem from './MenuItem';
import { Grid } from '@material-ui/core';
import { LanguageSwitcher } from './LanguageSwitcher';
import { SignatureCalligraphy } from './SignatureCalligraphy';

export const NavMenu = props => {
    const items = props.items;
    return (
        <div className="nav-menu">
            <Grid container direction="column" spacing={5}>
                <SignatureCalligraphy size="100px" />
                {items.map((item, index) => (
                    <MenuItem
                        key={index}
                        item={item}
                        onClick={console.log('Clicked an item')}
                    />
                ))}
                <LanguageSwitcher />
            </Grid>
        </div>
    );
};
