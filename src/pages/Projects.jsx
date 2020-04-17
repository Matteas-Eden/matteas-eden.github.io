import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { ProjectCard } from '../components/ProjectCard';

import { mdiReact, mdiSass, mdiLanguageJava } from '@mdi/js';

import BakuganRerolledLogo from '../assets/project-logos/bakugan-rerolled.png';
import RollForReactionLogo from '../assets/project-logos/roll-for-reaction.png';
import SiteLogo from '../assets/project-logos/site-logo.png';
import OuterstellarLogo from '../assets/project-logos/outerstellar.png';
import EnergizeLogo from '../assets/project-logos/energize.png';
import AnzenLogo from '../assets/project-logos/anzen.png';

const useStyles = makeStyles({
    page: {
        position: 'relative',
    },
    root: {
        fontFamily: 'high-tower',
        color: '#000',
        fontSize: '10vmin',
    },
});

export const Projects = props => {
    const classes = useStyles(props);

    return (
        <div className={classes.page}>
            {!props.mobile && (
                <Typography className={classes.root} variant="h3">
                    Never Stop Creating
                </Typography>
            )}
            <Grid
                container
                spacing={1}
                alignItems="center"
                style={{
                    marginTop: props.mobile ? '0.5vmin' : '0',
                    height: props.mobile ? 'calc(90vh - 15vmin - 1vw)' : '65vh',
                    overflowX: 'none',
                    overflowY: 'auto',
                }}
            >
                <Grid item>
                    <ProjectCard
                        mobile={props.mobile}
                        title="Roll for Reaction"
                        description="Roguelike dungeon crawler with turn based combat"
                        link="https://github.com/matteas-eden/roll-for-reaction"
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
                        mobile={props.mobile}
                        title="Bakugan Rerolled"
                        description="Arcade card-battler designed to emulate 2007 anime Bakugan"
                        link="https://github.com/matteas-eden/bakugan-rerolled"
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
                        mobile={props.mobile}
                        title="matteas.nz"
                        description="A custom portfolio website with a uniquely original design"
                        link="https://github.com/matteas-eden/matteas-eden.github.io"
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
                            // {
                            //     name: 'Material UI',
                            //     icon: mdiMaterialUi,
                            //     colour: '#1e90ff',
                            // },
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
                        mobile={props.mobile}
                        title="Energize"
                        description="A side-scrolling action adventure game with LAN multiplayer"
                        link="https://github.com/matteas-eden/energize"
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
                        mobile={props.mobile}
                        title="Anzen"
                        description="A full-stack hybrid peer-to-peer messaging service"
                        link="https://github.com/matteas-eden/anzen"
                        image={AnzenLogo}
                        labels={[
                            { name: 'Python' },
                            { name: 'CherryPy' },
                            { name: 'Jinja' },
                        ]}
                    />
                </Grid>
                <Grid item>
                    <ProjectCard
                        mobile={props.mobile}
                        title="Outerstellar"
                        description="A top-down arcade shooter created in 5 days for a hackathon"
                        link="https://github.com/matteas-eden/outerstellar"
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
