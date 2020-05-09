import React, { Component } from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpansionPanel, Typography, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';

class ExpansionPanelSpecies extends Component{

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

    handleBack = () =>{
        this.props.action("/")
    }

    render(){
        const { data } = this.state

        return(
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                <Typography>Species</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                    {data.flavor_text}
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}
    
export default ExpansionPanelSpecies;