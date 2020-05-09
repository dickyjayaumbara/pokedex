import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


class DetailAppBar extends Component{

    handleBack = () =>{
        this.props.action("/")
    }

    render(){
        return(
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={() => this.handleBack()} aria-label="close">
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Detail
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}
    
export default DetailAppBar;