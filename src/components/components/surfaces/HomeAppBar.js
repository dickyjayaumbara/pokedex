import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class HomeAppBar extends Component{
    
    render(){
        return(
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Pokedex
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}
    
export default HomeAppBar;