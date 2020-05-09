import React, { Component } from 'react'
import CircProgress from './CircProgress';

class ImagePopUp extends Component{

    constructor(props){
        super(props);

        this.state = {
            id : this.props.id
        }
    }

    handleCloseImagePopUp = () => {
        this.props.action();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.id !== this.props.id){
            this.setState({
                id : this.props.id,
            })
        }
    }

    render(){
        const { id } = this.state;

        return(
            <div style={styles.bxPopUp} onClick={() => this.handleCloseImagePopUp()} >
                <CircProgress />

                <img src={"https://pokeres.bastionbot.org/images/pokemon/"+ id +".png"} alt="" style={styles.image}/>
            </div>
        )
    }
}
    
export default ImagePopUp;

const styles = {
    bxPopUp : {
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: "10000",
        display: "flex",
        justifyContent : "center",
        alignItems : "center",
        backgroundColor: "#000000c9"
    },

    image : {
        width: "90%",
        zIndex:2
    }

}
