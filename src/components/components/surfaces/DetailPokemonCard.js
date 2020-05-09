import React, { Component } from 'react';
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

    handleOpenImagePopUp = () => {
        this.props.action();
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
            <CardContent style={styles.content} onClick={() => this.handleOpenImagePopUp()}>
                <div style={styles.bxInfo}>
                    <div style={styles.bxtext}>
                        <Typography>#{card.id}</Typography>
                        <Typography style={styles.name}>{card.name}</Typography>
                    </div>
                    
                    <div style={styles.bxOther}>
                        <Typography>Base Experience : {card.baseExperience}</Typography>
                        <Typography>Weight : {card.weight}</Typography>
                        <Typography style={{fontSize: "10px", marginTop: "10px"}}>*Click me! to see the image!</Typography>
                    </div>
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