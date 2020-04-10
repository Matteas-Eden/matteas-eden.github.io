import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { ProjectCard } from '../components/ProjectCard';
import pic from '../assets/images/TokyoStreet.png';
import { mdiReact, mdiSass, mdiLanguageJava } from '@mdi/js';

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
                        image={pic}
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
                        image={pic}
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
            </Grid>
        </div>
    );
};
