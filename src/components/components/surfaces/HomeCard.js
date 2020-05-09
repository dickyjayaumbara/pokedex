import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia, Paper } from '@material-ui/core';

class HomeCard extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            card : this.props.card  
        }
    }

    handleShowDetail = (name) => {
        this.props.action(name);
    }

    render(){
        const { card } = this.state

        return(
            <Card style={styles.card}>
                <CardActionArea onClick={() => this.handleShowDetail(card.name)}>
                    <CardContent style={styles.content}>

                        <Typography style={styles.bxInfo}>
                            <Typography>#{card.id}</Typography>
                            <Typography style={styles.name}>{card.name}</Typography>
                        </Typography>
                        
                        <CardMedia
                            style={styles.media}
                            image={card.sprites.front_default}
                            title={card.name}
                        />
                    </CardContent>
                </CardActionArea>
            </Card> 
        )
    }
}
    
export default HomeCard;

const styles = {
    card : {
        margin : "10px 0px",
    },

    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    bxInfo :{
        display: "flex",
    },

    name :{
        marginLeft : "15px"
    },

    media :{
        backgroundSize: "contain",
        width: "50px",
        height: "50px"
    }
}