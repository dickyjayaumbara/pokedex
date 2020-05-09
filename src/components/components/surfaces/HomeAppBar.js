import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

class HomeAppBar extends Component{

    constructor(props){
        super(props);

        this.state = {
            filterType: this.props.filterType
        }
    }

    handleOpenFilterDialog = () => {
        this.props.action();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.filterType !== this.props.filterType){
            this.setState({
                filterType : this.props.filterType,
            })
        }
    }

    render(){
        const { filterType } = this.state;

        return(
            <AppBar position="fixed">
                <Toolbar style={styles.contTitle}>
                    <Typography variant="h6" noWrap>
                        Pokedex
                    </Typography>
                </Toolbar>
                <Toolbar style={styles.contFilter}>
                    <div style={styles.bxFilter}>
                        <Typography variant="caption" style={styles.labelFilter}>Type :</Typography>
                        <Button style={styles.btnFilter} onClick={() => this.handleOpenFilterDialog()}>{filterType}</Button>
                    </div>
                    
                </Toolbar>
            </AppBar>
        )
    }
}
    
export default HomeAppBar;

const styles = {
    contTitle:{
        minHeight: "40px"
    },

    contFilter :{
        minHeight: "40px",
        flexDirection: "row",
        padding: "0px 16px 10px"
    },

    bxFilter : {
        display: "flex",
        flexDirection: "column",
        marginRight: "10px"
    },

    labelFilter: {
        marginBottom: "5px"
    },

    btnFilter : {
        border: "2px solid black",
        padding: "0px",
        minWidth: "100px"
    }
}