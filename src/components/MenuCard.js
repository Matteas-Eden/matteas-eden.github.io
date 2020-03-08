import React from 'react';
import NavMenu from './NavMenu';
import LanguageSwitcher from './LanguageSwitcher';
import { Grid, Box, Divider } from '@material-ui/core';
import SignatureLogo from '../logo.svg';
import '../menu.css';

class MenuCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="MenuCard">
        <Grid container direction={'column'} spacing={3}>
          <Grid item sm>
          <img src={SignatureLogo} className="App-logo" alt="logo" />
          </Grid>
          <Divider />
          <Grid item sm>
            <NavMenu items={["About", "Projects", "Resume", "Contact"]} />
          </Grid>
          <Divider />
          <Grid item sm>
            <LanguageSwitcher />
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default MenuCard;