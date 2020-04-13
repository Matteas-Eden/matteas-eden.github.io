import { React, Component } from 'react';
import {
    withStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';

const styles = {
    text: {
        fontFamily: 'high-tower',
        fontSize: '3vw',
        color: '#000',
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: '2vw',
    },
    title: {
        flexGrow: 1,
    },
    appbar: {
        shadows: 'none',
        border: '2px solid green',
        color: '#000',
        height: '7.5vh',
        width: '95vw',
        // marginRight: '-10vh',
        // padding: '0',
    },
};

class MobileHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { istOpen: false, headerTitle: this.props.title };
    }

    render() {
        const { classes } = this.props;
        return (
            <AppBar
                className={classes.appbar}
                position="static"
                color="transparent"
            >
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Home
                    </Typography>
                    <IconButton
                        // edge="end"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        disableRipple
                    >
                        <Hamburger direction="left" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(MobileHeader);
