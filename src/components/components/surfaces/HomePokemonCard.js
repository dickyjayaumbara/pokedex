import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';

class HomePokemonCard extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            card : this.props.card
        }
    }

    handleShowDetail = (id) => {
        this.props.action(id);
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
            <Card style={styles.card}>
                <CardActionArea onClick={() => this.handleShowDetail(card.id)}>
                    <CardContent style={styles.content}>

                        <div style={styles.bxInfo}>
                            <div style={styles.bxtext}>
                                <Typography>#{card.id}</Typography>
                                <Typography style={styles.name}>{card.name}</Typography>
                            </div>
                            
                            <div style={styles.bxType}>
                                {
                                    card.types.map(function(item, i){
                                        return(
                                            <span key={i} style={styles.labelType}>{item.type.name}</span>
                                        )
                                     })
                                }
                            </div>
                        </div>
                        
                        <CardMedia
                            style={styles.media}
                            image={card.img}
                            title={card.name}
                        />
                    </CardContent>
                </CardActionArea>
            </Card> 
        )
    }
}
    
export default HomePokemonCard;

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
        flexDirection: "column",
        flex: 1,
        marginRight: "10px"
    },

    bxtext :{
        display: "flex",
        flexDirection: "row",
        marginBottom: "10px"
    },

    bxType: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1
    },

    labelType: {
        display: "flex",
        flex: 1,
        padding: "5px",
        marginRight: "5px",
        textTransform: "capitalize",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        border: "solid 2px black"
    },

    name :{
        marginLeft : "15px",
        textTransform: "capitalize"
    },

    media :{
        backgroundSize: "contain",
        width: "50px",
        height: "50px"
    }
}