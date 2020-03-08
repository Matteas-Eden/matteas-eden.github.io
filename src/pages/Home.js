import React from 'react';
import { Typography } from '@material-ui/core';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="home">
                <Typography variant="h1">This is the Home page</Typography>
            </div>
        );

    }

}

export default Home;