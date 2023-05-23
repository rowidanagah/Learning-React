
import React from "react";


class CustomButton extends React.Component {

    constructor(props){
        super();
        this.state ={
            color : props.color ? props.color : "btn btn-outline-primary",
            text : props.text ? props.text : "default title text"

        }
       
    }

    render(){
        
        return(
            <button className= {`${this.state.color}`} style={{backgroundColor:this.state.color}} > {this.state.text}</button>
        )
    }
}


export default CustomButton ;