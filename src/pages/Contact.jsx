import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { ContactForm } from '../components/ContactForm';

const useStyles = makeStyles({
    root: {
        textTransform: 'none',
        overflowY: 'auto',
        overflowX: 'none',
        height: props => (props.mobile ? 'calc(90vh - 15vmin - 1vw)' : '80vh'),
    },
    text: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '10vmin',
    },
});

export const Contact = props => {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            {!props.mobile && (
                <Typography className={classes.text} variant="h3">
                    Get in touch!
                </Typography>
            )}
            <Typography
                className={classes.text}
                style={{ fontSize: '5vmin' }}
                variant="h4"
            >
                Feel free to reach out to me via LinkedIn or send me an email by
                filling out the form below.
            </Typography>
            <ContactForm mobile={props.mobile} />
        </div>
    );
};
