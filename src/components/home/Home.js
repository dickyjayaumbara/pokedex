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

    handleChangeScreen = (pathName) => {
        this.props.history.push(pathName + "/dummyID")
    }

    componentDidMount(){
        ApiRequest.get("/pokemon?limit=1000", function(response){
            this.setState({
            loading: false,
               listCard : response.data.results
            })
        }.bind(this))
    }

    render(){
        const { loading, listCard } = this.state;

        return(
            <Container>
                <HomeAppBar />
                
                {loading && <CircProgress /> }

                {
                    listCard.map(function(item, i){
                       return(
                            <HomeCard key={i} card={item} />
                       )
                    })
                }
            </Container>
        )
    }
}

export default Home;