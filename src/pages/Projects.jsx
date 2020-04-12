import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { ProjectCard } from '../components/ProjectCard';

import { mdiReact, mdiSass, mdiLanguageJava, mdiMaterialUi } from '@mdi/js';

import BakuganRerolledLogo from '../assets/project-logos/bakugan-rerolled.png';
import RollForReactionLogo from '../assets/project-logos/roll-for-reaction.png';
import SiteLogo from '../assets/project-logos/site-logo.png';
import FeedrLogo from '../assets/project-logos/feedr.png';

const useStyles = makeStyles({
    root: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '10vmin',
    },
});

export const Projects = () => {
    const classes = useStyles();

    return (
        <div className="project-page">
            <Typography className={classes.root} variant="h3">
                Never Stop Creating
            </Typography>
            <Grid container spacing={1} alignItems="center">
                <Grid item>
                    <ProjectCard
                        title="Roll for Reaction"
                        description="Extension of react-rpg in the style of DnD"
                        image={RollForReactionLogo}
                        labels={[
                            {
                                name: 'React',
                                icon: mdiReact,
                                colour: '#61dbfb',
                            },
                            {
                                name: 'Redux',
                            },
                            {
                                name: 'Sass',
                                icon: mdiSass,
                                colour: '#9e5680',
                            },
                        ]}
                    />
                </Grid>
                <Grid item>
                    <ProjectCard
                        title="Bakugan Rerolled"
                        description="Arcade card-battler styled after 2007 anime Bakugan"
                        image={BakuganRerolledLogo}
                        labels={[
                            {
                                name: 'Java',
                                icon: mdiLanguageJava,
                                // colour: '#ed8b00',
                                // colour: '#d46702',
                                // colour: 'red',
                            },
                            {
                                name: 'FXGL',
                            },
                            {
                                name: 'Maven',
                            },
                        ]}
                    />
                </Grid>
                <Grid item>
                    <ProjectCard
                        title="Portfolio Website"
                        description="A custom website with a unique look to showcase myself"
                        image={SiteLogo}
                        labels={[
                            {
                                name: 'React',
                                icon: mdiReact,
                                colour: '#61dbfb',
                            },
                            {
                                name: 'Sass',
                                icon: mdiSass,
                                colour: '#9e5680',
                            },
                            {
                                name: 'Material UI',
                                icon: mdiMaterialUi,
                                colour: '#61dbfb',
                            },
                        ]}
                    />
                </Grid>
                <Grid item>
                    <ProjectCard
                        title="Feedr"
                        description="A simple and elegant media feed aggregrator"
                        image={FeedrLogo}
                        labels={[
                            {
                                name: 'React',
                                icon: mdiReact,
                                colour: '#61dbfb',
                            },
                            {
                                name: 'Material UI',
                                icon: mdiMaterialUi,
                                colour: '#61dbfb',
                            },
                        ]}
                    />
                </Grid>
                <Grid item>
                    <ProjectCard
                        title="Dice Roller"
                        description="Interactive 3D dice roller"
                    />
                </Grid>
                <Grid item>
                    <ProjectCard
                        title="Doto"
                        description="A to-do list webapp that integrates with Google accounts"
                        labels={[
                            {
                                name: 'React',
                                icon: mdiReact,
                                colour: '#61dbfb',
                            },
                            {
                                name: 'Material UI',
                                icon: mdiMaterialUi,
                                colour: '#61dbfb',
                            },
                        ]}
                    />
                </Grid>
            </Grid>
        </div>
    );
};
