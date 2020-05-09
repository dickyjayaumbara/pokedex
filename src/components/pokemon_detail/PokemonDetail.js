import React, { Component } from 'react'
import { Container, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import DetailAppBar from '../components/surfaces/DetailAppBar';
import CircProgress from '../components/feedback/CircProgress';
import ApiRequest from '../../utils/ApiRequest';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DetailPokemonCard from '../components/surfaces/DetailPokemonCard';
import ImagePopUp from '../components/feedback/ImagePopup';
import ExpansionPanelAbility from '../components/surfaces/ExpansionPanelAbility';
import ExpansionPanelSpecies from '../components/surfaces/ExpansionPanelSpecies';
import ExpansionPanelHeldItem from '../components/surfaces/ExpansionPanelHeldItem';
import ExpansionPanelGameIndices from '../components/surfaces/ExpansionPanelGameIndices';
import ExpansionPanelStats from '../components/surfaces/ExpansionPanelStats';
import ExpansionPanelTypes from '../components/surfaces/ExpansionPanelTypes';
import ExpansionPanelMoves from '../components/surfaces/ExpansionPanelMoves';

class PokemonDetail extends Component{
    constructor(props){
        super(props);

        this.state = {
            isImgPopUp : false,
            nameDetailPopUp : "",
            isDetailPopUp : false,
            loading : true,
            detailPopUp : {},
            data : {
                pokemon : {
                    id: "",
                    name: "",
                    img: "",
                    types:[],
                    abilities: [],
                    heldItems: [],
                    gameIndices: [],
                    stats: [],
                    moves: []
                },
                species : {}
            }
        }
    }


    handleChangeScreen = (pathName) => {
        this.props.history.push(pathName)
    }

    handleOpenImagePopUp = () => {
        this.setState({
            isImgPopUp : true
        })
    }

    handleCloseImagePopUp = () => {
        this.setState({
            isImgPopUp : false
        })
    }

    componentDidMount(){
        ApiRequest.get("/pokemon/"+this.props.match.params.id, function(response){
            let newData = {...this.state.data};
            
            newData.pokemon = {
                id : response.data.id,
                name : response.data.name,
                img : response.data.sprites.front_default,
                types : response.data.types,
                abilities : response.data.abilities,
                heldItems : response.data.held_items,
                gameIndices : response.data.game_indices,
                stats : response.data.stats,
                moves : response.data.moves,
                baseExperience : response.data.base_experience,
                weight: response.data.weight
            }
            
            let instance = {
                this : this,
                newData : newData
            };

            let arrUrlDetail = [
                {url: response.data.species.url},
            ];
            
            ApiRequest.getAll(arrUrlDetail, function(response){
                //species
                let flavorTextEntries = response[0].data.flavor_text_entries.find((item) => item.language.name === "en");
                newData.species = {
                    flavor_text : flavorTextEntries.flavor_text
                }
                
                instance.this.setState({
                    loading: false,
                    data : instance.newData
                })
            });
        }.bind(this))

        
    }

    render(){
        const { loading, isImgPopUp, data, } = this.state;

        return(
            <Container style={styles.cont}>
                <DetailAppBar action={(path) => this.handleChangeScreen(path)} />
                
                {isImgPopUp && <ImagePopUp action={this.handleCloseImagePopUp} id={data.pokemon.id} /> }
                {loading && <CircProgress /> }

                <div style={styles.bxData}>
                    <ExpansionPanel defaultExpanded>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                        <Typography>Pokemon</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>

                            <DetailPokemonCard key={0} card={data.pokemon} action={this.handleOpenImagePopUp} />

                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanelSpecies data={data.species} />
                    <ExpansionPanelTypes data={data.pokemon.types} />
                    <ExpansionPanelStats data={data.pokemon.stats} />
                    <ExpansionPanelAbility data={data.pokemon.abilities} />
                    <ExpansionPanelMoves data={data.pokemon.moves} />
                    <ExpansionPanelHeldItem data={data.pokemon.heldItems} />
                    <ExpansionPanelGameIndices data={data.pokemon.gameIndices} />

                </div>
            </Container>
        )
    }
}

export default PokemonDetail;

const styles = {
    cont:{
        paddingBottom: "20px"
    },

    bxData : {
        marginTop : "60px",
    },
}