import React from 'react';
import { Typography } from '@material-ui/core';

class Contact extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="contact">
                <Typography variant="h1">This is the Contact page</Typography>
            </div>
        );

    }
    
}

export default Contact;