import React, { Component } from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpansionPanel, Typography, ExpansionPanelDetails, ExpansionPanelSummary, Button } from '@material-ui/core';

class ExpansionPanelTypes extends Component{

    constructor(props){
        super(props);

        this.state = {
            data : this.props.data
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.data !== this.props.data){
            this.setState({
                data : this.props.data,
            })
        }
    }

    render(){
        const { data } = this.state;

        return(
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                <Typography>Types</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div style={styles.bx}>
                        {
                            data.map(function(item, i){
                                return(
                                    <div key={i} style={styles.bxBtn}>
                                        {<span style={styles.labelHidden}>Slot : {item.slot}</span>}
                                        <Button style={styles.btn} key={i} onClick={() => {}}>
                                            {item.type.name}
                                        </Button>
                                    </div>
                                )
                            }.bind(this))
                            
                        }
                    </div>
                    
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}
    
export default ExpansionPanelTypes;

const styles = {
    bx: {
        display: "flex",
        flexDirection : "column",
        flex: 1,
        justifyContent : "flex-start"
    },

    bxBtn : {
        display: "flex",
        flexDirection : "row",
        flex: 1,
        justifyContent : "center",
        alignItems: "center",
        position: "relative",
    },

    btn: {
        display:"flex",
        flex: 1, 
        width: "100%",
        border: "2px solid black",
        marginBottom: "5px"
    },

    labelHidden :{
        position: "absolute",
        top:0,
        left: 0,
        backgroundColor: "brown",
        padding: "5px",
        textTransform : "capitlize",
        fontSize: "10px",
        color: "white"
    }
}