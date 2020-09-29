import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';
import { LabelButton } from './LabelButton';
import { mdiGithub, mdiLinkedin, mdiDeviantart } from '@mdi/js';

const useStyles = makeStyles({
    footer: {
        width: (props) => (props.mobile ? '94vw' : '74vw'),
        height: (props) => (props.mobile ? '8vh' : '10vh'),
        borderTop: '1px solid black',
        position: 'absolute',
        bottom: (props) => (props.mobile ? '1vmin' : '0'),
        marginLeft: (props) => (props.mobile ? '0vw' : '-1vw'),
        paddingLeft: (props) => (props.mobile ? '1vw' : '1vw'),
        paddingRight: (props) => (props.mobile ? '0vw' : '-1vw'),
    },
    root: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '2vw',
    },
    labelButton: {
        height: '10vh',
        marginLeft: '-0.5vw',
        marginTop: '0.5vh',
        marginRight: '0.75vw',
    },
});

export const Footer = (props) => {
    const classes = useStyles(props);

    return (
        <div className={classes.footer}>
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="flex-start"
            >
                <Grid item className={classes.labelButton}>
                    <LabelButton
                        mobile={props.mobile}
                        text="My GitHub"
                        img={mdiGithub}
                        link="https://www.github.com/matteas-eden"
                    />
                </Grid>
                <Grid item className={classes.labelButton}>
                    <LabelButton
                        mobile={props.mobile}
                        text="My LinkedIn"
                        img={mdiLinkedin}
                        link="https://www.linkedin.com/in/matteas-eden"
                        color="#0073b1"
                    />
                </Grid>
                <Grid item className={classes.labelButton}>
                    <LabelButton
                        mobile={props.mobile}
                        text="Artist Credit"
                        img={mdiDeviantart}
                        link="https://www.deviantart.com/arsenixc/art/Tokyo-street-636792646"
                        colour="#05cc47"
                    />
                </Grid>
            </Grid>
        </div>
    );
};
