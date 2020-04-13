import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    form: {
        border: '1px solid black',
    },
    inner: {
        border: 'none',
    },
    label: {
        fontFamily: 'high-tower',
        fontSize: '2vw',
        color: '#000',
    },
    button: {
        background: 'none',
        border: '1px solid black',
        fontFamily: 'high-tower',
        fontSize: '5vw',
        color: '#000',
    },
    input: {
        background: 'none',
        border: '1px solid black',
        color: '#101010',
    },
    textarea: {
        background: 'none',
        border: '1px solid black',
        color: '#101010',
        resize: 'none',
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
            <Grid
                container
                direction="column"
                alignItems="flex-start"
                justify="space-around"
            >
                <Grid item>
                    <fieldset className={classes.inner}>
                        <Grid
                            item
                            container
                            direction="row"
                            alignItems="flex-start"
                            justify="center"
                            spacing={1}
                        >
                            <Grid item>
                                <label
                                    className={classes.label}
                                    for="full-name"
                                >
                                    Your Name:
                                </label>
                            </Grid>
                            <Grid item>
                                <input
                                    className={classes.input}
                                    type="text"
                                    name="name"
                                    placeholder="First and Last"
                                    required=""
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            direction="row"
                            alignItems="flex-start"
                            justify="center"
                            spacing={1}
                        >
                            <Grid item>
                                <label
                                    className={classes.label}
                                    for="email-address"
                                >
                                    Your Email Address:
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
                        </Grid>
                        <Grid
                            item
                            container
                            direction="row"
                            alignItems="flex-start"
                            justify="center"
                            spacing={1}
                        >
                            <Grid item>
                                <label className={classes.label} for="message">
                                    Your Message:
                                </label>
                            </Grid>
                            <Grid item>
                                <textarea
                                    className={classes.textarea}
                                    rows="10"
                                    name="message"
                                    placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
                                    required=""
                                ></textarea>
                            </Grid>
                        </Grid>
                        <input
                            type="hidden"
                            name="_subject"
                            value="Contact Form Submission"
                        />
                    </fieldset>
                </Grid>
                <Grid item>
                    <input
                        className={classes.button}
                        type="submit"
                        value="Submit"
                    />
                </Grid>
            </Grid>
        </form>
    );
};
