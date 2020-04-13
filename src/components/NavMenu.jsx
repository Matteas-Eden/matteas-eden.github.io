import React from 'react';
import { MenuItem } from './MenuItem';
import { Grid } from '@material-ui/core';

export const NavMenu = props => {
    return (
        <div className="nav-menu">
            <Grid container direction="column" alignItems="flex-start">
                {props.items.map((item, key) => (
                    <MenuItem
                        key={key}
                        item={item.text}
                        location={item.location}
                    />
                ))}
            </Grid>
        </div>
    );
};
