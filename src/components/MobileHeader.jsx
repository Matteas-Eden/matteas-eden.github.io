import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Select, MenuItem } from '@material-ui/core';

export const MobileHeader = (props) => {
    let history = useHistory();
    return (
        <AppBar
            position="static"
            color="transparent"
            style={{
                position: 'absolute',
                top: '0',
                borderBottom: '1px solid black',
                shadows: 'none',
                height: '10vmin',
                width: '110%',
            }}
        >
            <Select
                autoWidth
                defaultValue="Home"
                style={{
                    height: '10vmin',
                    fontSize: '9vmin',
                    fontFamily: 'high-tower',
                    color: '#000',
                }}
                onChange={(event) => {
                    let item = event.target.value;
                    console.log(history);
                    if (item === 'Home') history.push('/');
                    else if (item === 'Resumé') history.push('/resume');
                    else history.push('/' + item.toLowerCase());
                }}
            >
                {['Home', 'About', 'Projects', 'Resumé', 'Contact'].map(
                    (page) => (
                        <MenuItem value={page}>{page}</MenuItem>
                    )
                )}
            </Select>
        </AppBar>
    );
};
