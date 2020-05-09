import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';

class DetailPokemonCard extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            card : this.props.card
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.card !== this.props.card){
            this.setState({
                card : this.props.card,
            })
        }
    }


    render(){
        const { card } = this.state;
        
        return(
            <CardContent style={styles.content}>
                <div style={styles.bxtext}>
                    <Typography>#{card.id}</Typography>
                    <Typography style={styles.name}>{card.name}</Typography>
                </div>
                
                {card.img !== "" && <CardMedia
                    style={styles.media}
                    image={card.img}
                    title={card.name}
                />}
            </CardContent>
        )
    }
}
    
export default DetailPokemonCard;

const styles = {
    content: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px",
    },


    bxtext :{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },


    name :{
        marginLeft : "15px",
        textTransform: "capitalize"
    },

    media :{
        backgroundSize: "contain",
        width: "100px",
        height: "100px",
    }
}