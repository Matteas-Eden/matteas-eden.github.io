import React from 'react';
import NavMenu from './NavMenu';
import LanguageSwitcher from './LanguageSwitcher';
import { Grid, Divider, Button, Typography } from '@material-ui/core';
import SignatureLogo from '../logo.svg';
import { Link } from 'react-router-dom';
import '../menu.css';

class MenuCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="MenuCard">
        <div className="blurred-bg-container">
          <Grid container direction={'column'} spacing={3}>
            <Grid item sm>
            <Button component={Link} to={"/"}>
              {/* <img src={SignatureLogo} className="App-logo" alt="logo" /> */}
              <Typography className="menuItem">Home</Typography>
            </Button>
            </Grid>
            <Divider />
            <Grid item sm>
              <Grid container direction={'column'} spacing={3}>
                {/* <NavMenu items={["About", "Projects", "Resume", "Contact"]} /> */}
                <Button component={Link} to={"/about"}>
                  <Typography className="menuItem">About</Typography>
                </Button>
                <Button component={Link} to={"/projects"}>
                <Typography className="menuItem">Projects</Typography>
                </Button>
                <Button component={Link} to={"/cv"}>
                <Typography className="menuItem">My CV</Typography>
                </Button>
                <Button component={Link} to={"/contact"}>
                <Typography className="menuItem">Contact</Typography>
                </Button>
              </Grid>
            </Grid>
            <Divider />
            <Grid item sm>
              <LanguageSwitcher />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
};

export default MenuCard;