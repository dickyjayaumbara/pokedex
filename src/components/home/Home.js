import React, { Component } from 'react'
import './Home.css';
import ApiRequest from '../../utils/ApiRequest';


class Home extends Component{

    handleChangeScreen = (pathName) => {
        this.props.history.push(pathName + "/dummyID")
    }

    componentDidMount(){
        ApiRequest.get("/pokemon", function(response){
           
        })
    }

    render(){
        return(
            <div>
                <h1>HOME - List of Pokemon</h1>
                <button onClick={() => this.handleChangeScreen("pokemon_detail")}>Detail</button>
            </div>
        )
    }
}

export default Home;