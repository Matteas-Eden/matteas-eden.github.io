import React from 'react';
import NavMenu from './NavMenu';
import LanguageSwitcher from './LanguageSwitcher';
import Grid from '@material-ui/core/Grid';
import SignatureLogo from '../logo.svg';

class MenuCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="test">
        <Grid container>
          <Grid item sm>
          <img src={SignatureLogo} className="App-logo" alt="logo" />
          </Grid>
          {/* <Grid item sm>
            <NavMenu items={["About", "Projects", "Resume", "Contract"]} />
          </Grid>
          <Grid item sm>
            <LanguageSwitcher />
          </Grid> */}
        </Grid>
      </div>
    );
  }
};

export default MenuCard;