import React, { Component } from 'react'
import './Home.css';


class Home extends Component{

    handleChangeScreen = (pathName) => {
        this.props.history.push(pathName + "/dummyID")
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