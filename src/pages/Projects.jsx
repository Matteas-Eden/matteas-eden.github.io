import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { ProjectCard } from '../components/ProjectCard';
import pic from '../assets/images/TokyoStreet.png';

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
            <Grid container spacing={6} alignItems="center">
                <Grid item xs={6}>
                    <ProjectCard
                        image={pic}
                        title="Title 1"
                        description="Example description"
                    />
                </Grid>
                <Grid item xs={6}>
                    <ProjectCard
                        image={pic}
                        title="Title 2"
                        description="Example description"
                    />
                </Grid>
                <Grid item xs={6}>
                    <ProjectCard
                        image={pic}
                        title="Title 3"
                        description="Example description"
                    />
                </Grid>
                <Grid item xs={6}>
                    <ProjectCard
                        image={pic}
                        title="Title 4"
                        description="Example description"
                    />
                </Grid>
            </Grid>
        </div>
    );
};
