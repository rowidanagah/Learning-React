
import React from "react";


class CustomTitle extends React.Component {

    constructor(props){
        super();
        this.state ={
            color : props.color ? props.color : "default title text",
            text : props.text ? props.text : "default title text",
            float: props.float ? props.float : ""
        }
       
    }

    render(){
        
        return(
            <h4 style={{color:this.state.color}} className={`display-6 ${this.state.float}`}>{ this.state.text }</h4>
        )
    }
}


export default CustomTitle ;