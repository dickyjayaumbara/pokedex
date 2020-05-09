import React, { Component } from 'react'
import ApiRequest from '../../utils/ApiRequest';
import Container from '@material-ui/core/Container';
import HomeAppBar from '../components/surfaces/HomeAppBar';
import HomeCard from '../components/surfaces/HomeCard';
import CircProgress from '../components/feedback/CircProgress';
import FilterDialog from '../components/feedback/FilterDialog';


class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            filterDialog : false,
            listPokemon : [],
            filterPokemon : [],
            listType : [],
            filterType : "ALL"
        }
    }

    handleOpenFilterDialog = () => {
        this.setState({
            filterDialog : true
        })
      };
    
    handleCloseFilterDialog = (value) => {
        if(value === undefined)
            return;

  
        var newFilterPokemon = [...this.state.listPokemon];
        
        let dataFilter;
        if(value === "all"){
            dataFilter = newFilterPokemon;
        }
        else{
            dataFilter = newFilterPokemon.filter(function(item){
                let i=0;
                while(i<item.types.length)
                {
                    if(item.types[i].type.name === value)
                        return true;
                    i++;
                }
    
                return false;
            }); 
        }

        this.setState({
            filterDialog : false,
            filterType : value,
            filterPokemon : dataFilter
        })
      };

    handleShowDetail = (name) =>{
        this.props.history.push({
            pathname: "/pokemon_detail/"+name,
        })
    }

    componentDidMount(){

        let arrUrl = [
            {url: ApiRequest.getBaseApiUrl() + "/pokemon?limit=1000"},
            {url : ApiRequest.getBaseApiUrl() + "/type"},
        ]

        ApiRequest.getAll(arrUrl, function(response){
            let instance = {
                this: this,
                listType: response[1].data.results
            }
                
            let arrUrlPokemon = [];
            let i = 0;

            while(i < response[0].data.results.length){
                let url = response[0].data.results[i];
                arrUrlPokemon = [...arrUrlPokemon, url]
                i++;
            }

            ApiRequest.getAll(arrUrlPokemon, function(response){
                
                let newListPokemon = [...instance.this.state.listPokemon];
                let newFilterPokemon = [...instance.this.state.filterPokemon];
                let i=0;
                while(i<response.length){

                    let pokemon = {
                        id : response[i].data.id,
                        name : response[i].data.name,
                        img : response[i].data.sprites.front_default,
                        types : response[i].data.types
                    }

                    newListPokemon = [...newListPokemon, pokemon];
                    newFilterPokemon = [...newFilterPokemon, pokemon];
                    i++;
                }
                
                instance.this.setState({
                loading: false,
                    listPokemon : newListPokemon,
                    filterPokemon : newFilterPokemon,
                    listType: instance.listType
                })

            }.bind(instance));
        }.bind(this))

        
    }

    render(){
        const { loading, filterDialog, listPokemon, filterPokemon,  listType, filterType } = this.state;

        return(
            <Container>
                <HomeAppBar action={this.handleOpenFilterDialog} filterType={filterType} />
                
                {loading && <CircProgress /> }

                <div style={styles.listCard}>
                {
                    filterPokemon.map(function(item, i){
                       return(
                            <HomeCard key={i} card={item} action={this.handleShowDetail} />
                       )
                    }.bind(this))
                }
                </div>

                <FilterDialog listType={listType} open={filterDialog} onClose={(value) => this.handleCloseFilterDialog(value)} />
            </Container>
        )
    }
}

export default Home;

const styles = {
    listCard : {
        marginTop : "110px",
    },

    filterButton : {
        position: "fixed",
        bottom: 10,
        right: 10
    }
}