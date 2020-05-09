import React, { Component } from 'react'
import './PokemonDetail.css';

class PokemonDetail extends Component{

    handleChangeScreen = (pathName) => {
        this.props.history.push(pathName)
    }

    render(){
        return(
            <div>
                <h1>Pokemon Detail - Infromation detail of pokemon</h1>
                <button onClick={() => this.handleChangeScreen("/")}>Back</button>
            </div>
        )
    }
}

export default PokemonDetail;