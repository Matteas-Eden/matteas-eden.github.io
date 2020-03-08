import React from 'react';
import { Typography } from '@material-ui/core';

class About extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="about">
                <Typography variant="h1">This is the About page</Typography>
            </div>
        );

    }
    
}

export default About;