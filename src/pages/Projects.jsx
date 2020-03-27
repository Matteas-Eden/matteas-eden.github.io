import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ProjectCard } from '../components/ProjectCard';
import pic from '../assets/images/TokyoStreet.png';

export const Projects = () => {
    return (
        <div className="project-page">
            <Typography
                style={{ fontFamily: 'high-tower', color: '#000' }}
                variant="h3"
            >
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
