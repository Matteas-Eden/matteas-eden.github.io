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
    },
    label: {
        fontFamily: 'high-tower',
        fontSize: '5vmin',
        color: '#000',
    },
    button: {
        background: 'none',
        border: '1px solid black',
        fontFamily: 'high-tower',
        fontSize: '5vmin',
        color: '#000',
    },
    input: {
        position: 'absolute',
        background: 'none',
        border: '1px solid black',
        fontSize: '2.5vmin',
        color: '#101010',
        right: '1vmin',
        width: '50%',
    },
    textarea: {
        background: 'none',
        border: '1px solid black',
        fontSize: '2.5vmin',
        color: '#101010',
        resize: 'none',
        height: '21vh',
        width: '45vw',
    },
    // Mobile Variant
    mobileForm: {
        position: 'relative',
        border: '1px solid black',
    },
    mobileInner: {
        border: 'none',
        height: 'inherit',
        width: 'inherit',
    },
    mobileLabel: {
        fontFamily: 'high-tower',
        fontSize: '5vmin',
        color: '#000',
    },
    mobileButton: {
        background: 'none',
        border: '1px solid black',
        fontFamily: 'high-tower',
        fontSize: '7.5vmin',
        color: '#000',
    },
    mobileInput: {
        background: 'none',
        border: '1px solid black',
        fontSize: '2.5vmin',
        color: '#000',
        height: '3vmin',
        width: '75%',
        marginTop: '-20vmin',
    },
    mobileTextarea: {
        background: 'none',
        border: '1px solid black',
        fontSize: '2.5vmin',
        color: '#000',
        resize: 'none',
        height: '30vh',
        width: '125%',
    },
});

export const ContactForm = props => {
    const classes = useStyles(props);

    return (
        <form
            name="simple-contact-form"
            accept-charset="utf-8"
            action="https://formspree.io/me@matteas.nz"
            method="post"
            className={props.mobile ? classes.mobileForm : classes.form}
        >
            <fieldset
                className={props.mobile ? classes.mobileInner : classes.inner}
            >
                <Grid container>
                    <Grid
                        item
                        container
                        direction="column"
                        alignItems="flex-start"
                        justify="space-around"
                    >
                        <Grid item>
                            <label
                                className={
                                    props.mobile
                                        ? classes.mobileLabel
                                        : classes.label
                                }
                                for="full-name"
                            >
                                Name
                            </label>
                            <input
                                className={
                                    props.mobile
                                        ? classes.mobileInput
                                        : classes.input
                                }
                                type="text"
                                name="name"
                                placeholder="First name Last name"
                                required
                            />
                        </Grid>
                        <Grid item>
                            <label
                                className={
                                    props.mobile
                                        ? classes.mobileLabel
                                        : classes.label
                                }
                                for="email-address"
                            >
                                Email Address
                            </label>
                            <input
                                className={
                                    props.mobile
                                        ? classes.mobileInput
                                        : classes.input
                                }
                                type="email"
                                name="_replyto"
                                placeholder="email@domain.tld"
                                required
                            />
                        </Grid>
                        <Grid item>
                            <label
                                className={
                                    props.mobile
                                        ? classes.mobileLabel
                                        : classes.label
                                }
                                for="message"
                            >
                                Your Message
                            </label>
                            <textarea
                                className={
                                    props.mobile
                                        ? classes.mobileTextarea
                                        : classes.textarea
                                }
                                name="message"
                                placeholder="Lorem ipsum dolor sit amet..."
                                required
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
            <center style={{ marginTop: '-1vmin', marginBottom: '1vmin' }}>
                <input
                    className={
                        props.mobile ? classes.mobileButton : classes.button
                    }
                    type="submit"
                    value="Submit"
                />
            </center>
        </form>
    );
};
