import React, { Component } from 'react'
import { Container, Typography } from '@material-ui/core';
import DetailAppBar from '../components/surfaces/DetailAppBar';
import CircProgress from '../components/feedback/CircProgress';
import Button from '@material-ui/core/Button';
import ApiRequest from '../../utils/ApiRequest';

class PokemonDetail extends Component{
    constructor(props){
        super(props);

        this.state = {
            loading : true,
            data : {}
        }
    }


    handleChangeScreen = (pathName) => {
        this.props.history.push(pathName)
    }

    componentDidMount(){

        ApiRequest.get("/pokemon/"+this.props.match.params.name, function(response){
            this.setState({
                loading: false,
                data : response.data
             })

        }.bind(this))

        
    }

    render(){
        const { loading, data } = this.state;

        return(
            <Container>
                <DetailAppBar data={data} />
                
                {loading && <CircProgress /> }

                <Typography variant="h6" noWrap>
                    {data.name}
                </Typography>

                <Button variant="contained" color="primary" onClick={() => this.handleChangeScreen("/")}>
                    Back
                </Button>
               
            </Container>
        )
    }
}

export default PokemonDetail;