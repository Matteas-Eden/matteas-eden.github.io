import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { ProjectCard } from '../components/ProjectCard';

import { mdiReact, mdiSass, mdiLanguageJava, mdiMaterialUi } from '@mdi/js';

import BakuganRerolledLogo from '../assets/project-logos/bakugan-rerolled.png';
import RollForReactionLogo from '../assets/project-logos/roll-for-reaction.png';
import SiteLogo from '../assets/project-logos/site-logo.png';
import FeedrLogo from '../assets/project-logos/feedr.png';
import OuterstellarLogo from '../assets/project-logos/outerstellar.png';
import EnergizeLogo from '../assets/project-logos/energize.png';

const useStyles = makeStyles({
    root: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '10vmin',
    },
});

export const Projects = props => {
    const classes = useStyles();

    return (
        <div className="project-page">
            {!props.mobile && (
                <Typography className={classes.root} variant="h3">
                    Never Stop Creating
                </Typography>
            )}
            <Grid container spacing={1} alignItems="center">
                <Grid item>
                    <ProjectCard
                        title="Roll for Reaction"
                        description="Roguelike dungeon crawler with turn based combat"
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
                        description="Arcade card-battler designed to emulate 2007 anime Bakugan"
                        image={BakuganRerolledLogo}
                        labels={[
                            {
                                name: 'Java',
                                icon: mdiLanguageJava,
                                colour: 'red',
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
                        title="matteas.nz"
                        description="A custom portfolio website with a uniquely original design"
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
                {/* <Grid item>
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
                </Grid> */}
                <Grid item>
                    <ProjectCard
                        title="Energize"
                        description="A side-scrolling action adventure game with LAN multiplayer"
                        image={EnergizeLogo}
                        labels={[
                            {
                                name: 'Java',
                                icon: mdiLanguageJava,
                                colour: 'red',
                            },
                            {
                                name: 'JavaFX',
                                icon: mdiLanguageJava,
                                colour: 'red',
                            },
                        ]}
                    />
                </Grid>
                <Grid item>
                    <ProjectCard
                        title="Outerstellar"
                        description="A top-down arcade shooter created in 5 days for a hackathon"
                        image={OuterstellarLogo}
                        labels={[{ name: 'Gamemaker' }]}
                    />
                </Grid>
                {/* <Grid item>
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
                </Grid> */}
            </Grid>
        </div>
    );
};
