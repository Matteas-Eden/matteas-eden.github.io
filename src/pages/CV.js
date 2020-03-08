import React from 'react';
import { Typography } from '@material-ui/core';

class CV extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="CV">
                <Typography variant="h1">This is the CV page</Typography>
            </div>
        );

    }
    
}

export default CV;