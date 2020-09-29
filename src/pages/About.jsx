import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '5vmin',
        height: (props) =>
            props.mobile ? 'calc(90vh - 15vmin - 1vw)' : '70vh',
        overflowX: 'none',
        overflowY: 'auto',
    },
});

export const About = (props) => {
    const classes = useStyles(props);

    return (
        <div>
            <Typography className={classes.root} variant="h4">
                My name is Matteas Eden and I'm a University student from New
                Zealand. Welcome to my website.
                <br />
                <br />
                At the moment, I'm working through my fourth and final year of a
                Computer Engineering (Honours) degree at the University of
                Auckland in New Zealand.
                <br />
                I'm also pursuing graduate work opportunities as I look to begin
                my career in Software Development.
                <br />I have always been passionate in all that I do, whether
                it's my academic studies, my extracurricular commitments or my
                work in industry - I always strive to give 110%.
            </Typography>
        </div>
    );
};
