import React from 'react';
import { Grid } from '@material-ui/core';

export const ProjectCard = props => {
    return (
        <div
            style={{
                outline: '1px solid black',
            }}
        >
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="flex-start"
            >
                <div className="project-image">
                    <img
                        style={{
                            margin: '0.1rem',
                            outline: '1px solid black',
                            width: '5rem',
                            height: '5rem',
                        }}
                        src={props.image}
                        alt="project"
                    />
                </div>
                <div className="project-title">{props.title}</div>
                <div className="project-description">{props.description}</div>
            </Grid>
        </div>
    );
};
