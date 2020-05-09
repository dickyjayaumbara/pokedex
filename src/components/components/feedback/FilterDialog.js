import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import { Button, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';



class FilterDialog extends Component{

    constructor(props){
        super(props);

        this.state = {
            open : false, 
            listType : []
        }
    }

    handleClose = (value) => {
        this.props.onClose(value);
      };
    
    handleListItemClick = (value) => {
        this.props.onClose(value);
    };

    componentDidUpdate(prevProps, prevState){
        if(prevProps.listType !== this.props.listType){
            this.setState({
                listType : this.props.listType,
            })
        }

        if(prevProps.open !== this.props.open){
            this.setState({
                open : this.props.open,
            })
        }
    }

    render(){
        const { open, listType } = this.state;

        return(
            <Dialog fullScreen aria-labelledby="simple-dialog-title" open={open}>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={() => this.handleClose()} aria-label="close">
                        <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" >
                            Filter by Type
                        </Typography>
                    </Toolbar>
                </AppBar>

                <List>
                    <ListItem key={0} style={styles.listItem}>
                        <Button style={styles.btnListFilter} onClick={() => this.handleClose("all")}>
                            ALL
                        </Button>
                    </ListItem>
                    {
                        listType.map(function(item, i){
                            return(
                                <ListItem key={i} style={styles.listItem}>
                                    <Button style={styles.btnListFilter} onClick={() => this.handleClose(item.name)}>
                                        {item.name}
                                    </Button>
                                </ListItem>
                            )
                        }.bind(this))
                    }
                </List>
            </Dialog>
        )
    }
}

export default FilterDialog;

const styles = {
    listItem:{
        padding : "5px 16px"
    },

    btnListFilter : {
        width: "100%",
        border: "2px solid black"
    }
}
