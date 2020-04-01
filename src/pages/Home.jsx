import React from 'react';
import clsx from 'clsx';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        color: '#000',
        fontSize: '7vh',
    },
    english: {
        fontFamily: 'high-tower',
    },
    japanese: {
        fontFamily: 'chogokubosogothic',
        fontWeight: 'bold',
    },
});

export const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography
                className={clsx(classes.root, classes.english)}
                variant="h3"
            >
                Hi, I'm Matteas Eden. This is my website.
                <br />
                It's still under construction at the moment, but make sure to
                watch this space.
                <br />
            </Typography>
            <Typography
                className={clsx(classes.root, classes.japanese)}
                variant="h3"
            >
                <br />
                こんにちは、イーデン・マテアスです。私のサイトへようこそ。
                <br />
                現在まだ工事中だけど、きっとこのスペースを見続けて！
            </Typography>
        </div>
    );
};
