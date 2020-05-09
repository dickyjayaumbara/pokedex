import React, { Component } from 'react'
import { Container, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import DetailAppBar from '../components/surfaces/DetailAppBar';
import CircProgress from '../components/feedback/CircProgress';
import Button from '@material-ui/core/Button';
import ApiRequest from '../../utils/ApiRequest';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DetailPokemonCard from '../components/surfaces/DetailPokemonCard';

class PokemonDetail extends Component{
    constructor(props){
        super(props);

        this.state = {
            loading : true,
            data : {
                pokemon : {
                    id: "",
                    name: "",
                    img: "",
                    types:[]
                },
                species : {}
            }
        }
    }


    handleChangeScreen = (pathName) => {
        this.props.history.push(pathName)
    }

    componentDidMount(){
        ApiRequest.get("/pokemon/"+this.props.match.params.id, function(response){
            let newData = {...this.state.data};
            
            newData.pokemon = {
                id : response.data.id,
                name : response.data.name,
                img : response.data.sprites.front_default,
                types : response.data.types
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

            }.bind(instance));
        }.bind(this))

        
    }

    render(){
        const { loading, data } = this.state;

        return(
            <Container>
                <DetailAppBar action={(path) => this.handleChangeScreen(path)} />
                
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

                            <DetailPokemonCard key={0} card={data.pokemon} />

                        </ExpansionPanelDetails>
                    </ExpansionPanel>

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
                            {data.species.flavor_text}
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </Container>
        )
    }
}

export default PokemonDetail;

const styles = {
    bxData : {
        marginTop : "60px",
    },
}