import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class HomeCard extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            card : this.props.card  
        }
    }

    render(){
        const { card } = this.state

        return(
            <Card style={styles.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography>{card.name}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card> 
        )
    }
}
    
export default HomeCard;

const styles = {
    card : {
        margin : "10px 0px"
    }
}