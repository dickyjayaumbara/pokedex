import React, { Component } from 'react'
import './Home.css';
import ApiRequest from '../../utils/ApiRequest';
import Container from '@material-ui/core/Container';
import HomeAppBar from '../components/surfaces/HomeAppBar';
import HomeCard from '../components/surfaces/HomeCard';
import CircProgress from '../components/feedback/CircProgress';


class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            listCard : []
        }
    }

    handleShowDetail = (name) =>{
        this.props.history.push({
            pathname: "/pokemon_detail/"+name,
        })
    }

    componentDidMount(){
        ApiRequest.get("/pokemon?limit=20", function(response){
            let instance = this;
            
            let arrUrl = [];
            let i = 0;

            while(i < response.data.results.length){
                let url = response.data.results[i];
                arrUrl = [...arrUrl, url]
                i++;
            }


            ApiRequest.getAll(arrUrl, function(response){
                
                let newListCard = [...instance.state.listCard];

                let i=0;
                while(i<response.length){
                    let data = response[i].data
                    newListCard = [...newListCard, data];
                    i++;
                }

                instance.setState({
                loading: false,
                   listCard : newListCard
                })

            }.bind(instance));

            
        }.bind(this))
    }

    //https://pokeapi.co/api/v2/pokemon/1/

    render(){
        const { loading, listCard } = this.state;

        return(
            <Container>
                <HomeAppBar />
                
                {loading && <CircProgress /> }

                {
                    listCard.map(function(item, i){
                       return(
                            <HomeCard key={i} card={item} action={this.handleShowDetail} />
                       )
                    }.bind(this))
                }
            </Container>
        )
    }
}

export default Home;