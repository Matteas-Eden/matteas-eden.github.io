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
                Hi, I'm Matteas Eden.
                <br />
                <br />
                Welcome to my little corner of the internet. You can use the
                links on the left to read about me, see some of the cool
                projects I've been involved with or even take a look at my
                Resumé if you're an employer and looking to hire.
            </Typography>
            {/* <Typography
                className={clsx(classes.root, classes.japanese)}
                variant="h3"
            >
                <br />
                こんにちは、イーデン・マテアスです。私のサイトへようこそ。
                <br />
                現在まだ工事中だけど、きっとこのスペースを見続けてください！
            </Typography> */}
        </div>
    );
};
