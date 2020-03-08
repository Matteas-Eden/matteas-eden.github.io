import React from 'react';
import MenuCard from '../components/MenuCard'
import Grid from '@material-ui/core/Grid'

class Main extends React.Component{
    constructor(props) {
        super(props);
        // Do nothing yet
    }

    render() {
        return (
            <Grid container>
                <MenuCard />
            </Grid>
        )
    }
}

export default Main;