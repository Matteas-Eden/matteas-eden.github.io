import React from 'react';
import { Typography } from '@material-ui/core';

class Projects extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="projects">
                <Typography variant="h1">This is the Projects page</Typography>
            </div>
        );

    }
    
}

export default Projects;