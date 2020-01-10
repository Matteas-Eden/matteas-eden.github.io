import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import EnergizeScreenshot from './images/energize-screenshot.png';
import FlikPic from './images/flik-picture.jpg';
import BakuganLogo from './images/bakugan-rerolled-logo.png';
import HeroOfKonoha from './images/flappy-bird-pic.jpeg';
import AnzenMain from './images/anzen-login-screenshot.png';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Matteas Eden
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();
  var keyIndex = 1;

  /**
   * <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
   */

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              ようこそ！
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
          This is my personal website I created using React to showcase the various projects I have worked
	  on over the past few years. It doesn't have much yet, but I'm hoping to change that as time goes on.
	  So, make sure to keep watching this space!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="http://matteas-eden.github.io/jekyll-site">
                    Jekyll Portfolio
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href="http://github.com/matteas-eden">
                    Github Profile
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* Energize */}
            <Grid item key={keyIndex++} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={EnergizeScreenshot}
                    title="Energize"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Energize
                    </Typography>
                    <Typography>
                      A Zelda-clone made with JavaFX that supports LAN Multiplayer.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            {/* Outerstellar */}
            <Grid item key={keyIndex++} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Outerstellar"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Outerstellar
                    </Typography>
                    <Typography>
                      A top-down arcade shooter made in 5 days for an Arcade Games Hackathon.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Read More
                    </Button>
                  </CardActions>
                </Card>
            </Grid>
            {/* Bakugan Rerolled */}
            <Grid item key={keyIndex++} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={BakuganLogo}
                    title="Bakugan Rerolled"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Bakugan Rerolled
                    </Typography>
                    <Typography>
                      A JavaFX game that simulates the battle system from <i>Bakugan Battle Brawlers</i>.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Read More
                    </Button>
                  </CardActions>
                </Card>
            </Grid>
            {/* Flappy Bird */}
            <Grid item key={keyIndex++} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={HeroOfKonoha}
                    title="Hero of Konoha"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Hero of Konoha
                    </Typography>
                    <Typography>
                      A Flappy Bird clone made in VHDL, themed after the character <i>Naruto</i> from <i>Naruto</i>.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Read More
                    </Button>
                  </CardActions>
                </Card>
            </Grid>
            {/* Anzen */}
            <Grid item key={keyIndex++} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={AnzenMain}
                    title="Anzen"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Anzen
                    </Typography>
                    <Typography>
                      A webapp for messaging other users on a hybrid P2P network.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Read More
                    </Button>
                  </CardActions>
                </Card>
            </Grid>
            {/* Flik */}
            <Grid item key={keyIndex++} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={FlikPic}
                    title="Flik"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Flik
                    </Typography>
                    <Typography>
                      A line-following robot designed to navigate a Pacman-like maze.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Read More
                    </Button>
                  </CardActions>
                </Card>
            </Grid>
            {/* MFVAS */}
            <Grid item key={keyIndex++} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Model Fusion Video Analytics System"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Model Fusion Video Analytics System 
                    </Typography>
                    <Typography>
                      An evaluation of a person-tracking system designed by <a 
                      className="App-link"
                      href="http://www.andrewchen.nz"
                      target="_blank"
                      rel="noopener noreferrer"
                      >Dr Andrew Chen</a>.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Read More
                    </Button>
                  </CardActions>
                </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        {/* <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
          Footer
        </Typography> */}
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Source for this site taken from <a href="https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/album">here. </a>
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
