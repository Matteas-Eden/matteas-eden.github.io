import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    form: {
        position: 'relative',
        border: '1px solid black',
        width: '50vw',
        height: '52.5vh',
    },
    inner: {
        border: 'none',
        marginLeft: '1vw',
        marginTop: '1vh',
    },
    label: {
        fontFamily: 'high-tower',
        fontSize: '1.5vw',
        color: '#000',
    },
    button: {
        background: 'none',
        border: '1px solid black',
        fontFamily: 'high-tower',
        fontSize: '3vw',
        height: '7vh',
        color: '#000',
        marginLeft: '1vw',
        marginTop: '1vh',
        marginBottom: '1vh',
    },
    input: {
        background: 'none',
        border: '1px solid black',
        color: '#101010',
        width: '45vw',
    },
    textarea: {
        background: 'none',
        border: '1px solid black',
        color: '#101010',
        resize: 'none',
        width: '45vw',
    },
});

export const ContactForm = () => {
    const classes = useStyles();

    return (
        <form
            name="simple-contact-form"
            accept-charset="utf-8"
            // action="https://formspree.io/me@matteas.nz"
            method="post"
            className={classes.form}
        >
            <fieldset className={classes.inner}>
                <Grid container>
                    <Grid
                        item
                        container
                        direction="column"
                        alignItems="flex-start"
                        justify="center"
                    >
                        <Grid item>
                            <label className={classes.label} for="full-name">
                                Name
                            </label>
                        </Grid>
                        <Grid item>
                            <input
                                className={classes.input}
                                type="text"
                                name="name"
                                placeholder="First name Last name"
                                required=""
                            />
                        </Grid>
                        <Grid item>
                            <label
                                className={classes.label}
                                for="email-address"
                            >
                                Email Address
                            </label>
                        </Grid>
                        <Grid item>
                            <input
                                className={classes.input}
                                type="email"
                                name="_replyto"
                                placeholder="email@domain.tld"
                                required=""
                            />
                        </Grid>
                        <Grid item>
                            <label className={classes.label} for="message">
                                Your Message
                            </label>
                        </Grid>
                        <Grid item>
                            <textarea
                                className={classes.textarea}
                                rows="6"
                                cols="50"
                                name="message"
                                placeholder="Lorem ipsum dolor sit amet..."
                                required=""
                            ></textarea>
                        </Grid>
                    </Grid>
                    <input
                        type="hidden"
                        name="_subject"
                        value="Contact Form Submission"
                    />
                </Grid>
            </fieldset>
            <input className={classes.button} type="submit" value="Submit" />
        </form>
    );
};
