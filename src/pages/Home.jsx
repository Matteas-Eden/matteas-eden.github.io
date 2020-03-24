import React from 'react';
import { Typography } from '@material-ui/core';

export const Home = () => {
    return (
        <div>
            <Typography
                style={{ fontFamily: 'high-tower', color: '#000' }}
                variant="h3"
            >
                Hi, I'm Matthew Eden. This is my website.
                <br />
                It's still under construction at the moment, but make sure to
                watch this space.
                <br />
            </Typography>
            <Typography
                style={{
                    fontFamily: 'chogokubosogothic',
                    fontWeight: 'bold',
                    color: '#000',
                }}
                variant="h3"
            >
                <br />
                こんにちは、イーデン・マシューです。私のサイトへようこそ。
                <br />
                現在まだ工事中だけど、きっとこのスペースを見続けて！
            </Typography>
        </div>
    );
};
