import React, { Component } from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpansionPanel, Typography, ExpansionPanelDetails, ExpansionPanelSummary, Button } from '@material-ui/core';

class ExpansionPanelGameIndices extends Component{

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
                <Typography>Game Indices</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div style={styles.bx}>
                        {
                            data.map(function(item, i){
                                return(
                                    <div key={i} style={styles.bxBtn}>
                                        <Button style={styles.btn} key={i} onClick={() => {}}>
                                            {item.version.name}
                                        </Button>
                                    </div>
                                )
                            })
                            
                        }
                    </div>
                    
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}
    
export default ExpansionPanelGameIndices;

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

    btn : {
        display:"flex",
        flex: 1, 
        width: "100%",
        border: "2px solid black",
        marginBottom: "5px"
    },
}