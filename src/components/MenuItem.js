import React from 'react';
import Grid from '@material-ui/core/Grid'
import { Typography, Button } from '@material-ui/core';

function MenuItem(props) {
    return (
        <Button onClick={() => {console.log("Hello, you asked for me?")}}>
            <Typography>{props.item}</Typography>
        </Button>
    );
}

export default MenuItem;