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

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link as NavLink
} from 'react-router-dom';

import EnergizeScreenshot from '../images/energize-screenshot.png';
import FlikPic from '../images/flik-picture.jpg';
import BakuganLogo from '../images/bakugan-rerolled-logo.png';
import HeroOfKonohaPic from '../images/flappy-bird-pic.jpeg';
import AnzenMain from '../images/anzen-login-screenshot.png';

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

function ProjectCard(props) {

	const classes = useStyles();

	return (
	      <Grid item key={props.key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={props.image}
                    title={props.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
			{props.title}
                    </Typography>
                    <Typography>
			{props.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button component={NavLink} to={props.link} size="small" color="primary">
                      Read More
                    </Button>
                  </CardActions>
                </Card>
            </Grid>
	);
}

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
                  <Button variant="contained" color="primary" href="https://www.linkedin.com/in/matteaseden/">
                    LinkedIn
                  </Button>
                </Grid>
                <Grid item>
                <Button variant="outlined" color="primary" href="https://github.com/Matteas-Eden">
                    Github
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

	<Container className={classes.cardGrid} maxWidth="md">
	  <Grid container spacing={4}>
	  <ProjectCard key={keyIndex++} image={AnzenMain} title="Anzen" description="Weeb + security = this site" link="/anzen" />
	  <ProjectCard key={keyIndex++} image={BakuganLogo} title="Bakugan Rerolled" 
	  	description="A JavaFX game that is currently in development hell."
	  	link="/bakugan-rerolled" 
	  />
	  <ProjectCard key={keyIndex++} image={EnergizeScreenshot} title="Energize" 
	  	description="A JavaFX game that is currently in development hell."
	  	link="/energize" 
	  />
	  <ProjectCard key={keyIndex++} image={FlikPic} title="Flik" 
	  	description="16 hour days at University."
	  	link="/flik" 
	  />
	  <ProjectCard key={keyIndex++} image={HeroOfKonohaPic} title="Hero of Konoha" 
	  	description="Naruto-themed flappy bird clone, believe it!"
	  	link="/hero-of-konoha" 
	  />
	  <ProjectCard key={keyIndex++} image={HeroOfKonohaPic} title="Model Fusion Video Analytics System" 
	  	description="A summer research project investigating the menu at Ichiban"
	  	link="/mfvas" 
	  />
	  <ProjectCard key={keyIndex++} image={HeroOfKonohaPic} title="Outerstellar" 
	  	description="One of my proudest accomplishments"
	  	link="/outerstellar" 
	  />
	  </Grid>
        </Container>
	
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Source for this site taken from <a href="https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/album">here. </a>
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
     </React.Fragment>
  );
}
