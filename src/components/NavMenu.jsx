import React from 'react';
import { MenuItem } from './MenuItem';
import { Grid } from '@material-ui/core';

export const NavMenu = props => {
    // const items = props.items;
    return (
        <div className="nav-menu">
            <Grid
                container
                direction="column"
                alignItems="flex-start"
                spacing={8}
            >
                <MenuItem
                    key={0}
                    item="About"
                    onClick={console.log('Clicked an item')}
                    location="/about"
                />
                <MenuItem
                    key={1}
                    item="Projects"
                    onClick={console.log('Clicked an item')}
                    location="/projects"
                />
                <MenuItem
                    key={2}
                    item="Resumé"
                    onClick={console.log('Clicked an item')}
                    location="/resume"
                />
                <MenuItem
                    key={3}
                    item="Contact"
                    onClick={console.log('Clicked an item')}
                    location="/contact"
                />
            </Grid>
        </div>
    );
};
