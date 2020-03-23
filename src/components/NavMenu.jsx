import React from 'react';
import { MenuItem } from './MenuItem';
import { Grid } from '@material-ui/core';

export const NavMenu = props => {
    const items = props.items;
    return (
        <div className="nav-menu">
            <Grid
                container
                direction="column"
                alignItems="flex-start"
                spacing={8}
            >
                {items.map((item, index) => (
                    <MenuItem
                        key={index}
                        item={item}
                        onClick={console.log('Clicked an item')}
                    />
                ))}
            </Grid>
        </div>
    );
};
