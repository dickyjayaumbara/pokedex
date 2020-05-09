import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class DetailAppBar extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            data : {}
        }
    }

    componentDidMount(){
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.data !== this.props.data){
            this.setState({
                data : this.props.data  
            })
        }
    }

    render(){
        const { data } = this.state;

        return(
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        {data.name}
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}
    
export default DetailAppBar;