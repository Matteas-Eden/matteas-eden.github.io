import React from 'react';
import clsx from 'clsx';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        color: '#000',
        fontSize: '7vmin',
        height: props => (props.mobile ? 'calc(90vh - 15vmin - 1vw)' : '70vh'),
        overflowX: 'none',
        overflowY: 'auto',
    },
    english: {
        fontFamily: 'high-tower',
    },
    japanese: {
        fontFamily: 'chogokubosogothic',
        fontWeight: 'bold',
    },
});

export const Home = props => {
    const classes = useStyles(props);

    return (
        <div>
            <Typography
                className={classes.english}
                style={{ color: '#000' }}
                variant="h1"
            >
                Hi, I'm Matteas.
            </Typography>
            <Typography
                className={clsx(classes.root, classes.english)}
                variant="h3"
            >
                Welcome to my little corner of the internet. You can use the
                links on {props.mobile ? 'the top bar' : 'the left'} to read
                about me, see some of the cool projects I've been involved with
                or take a look at my resumé if you're an employer and looking to
                hire.
            </Typography>
        </div>
    );
};
