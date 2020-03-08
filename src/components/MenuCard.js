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
      <div className="menuCard">
        <Grid container>
          <Grid item sm>
            <SignatureLogo />
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