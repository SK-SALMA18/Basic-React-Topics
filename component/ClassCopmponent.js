import React from "react";
import { Component } from "react";
class ClassComponent extends Component{
    constructor(props) {
      super(props)
      this.state = {
        message:"Welcome to props and state methods"
      }
    }
    
    render(){
        return(
            <div className="classcomp">
            <ul style={{listStyle:"none"}}>
                <li><h2 style={{background:"yellow"}}>Welcome to Class Component</h2></li>
                <li><h3>Message:{this.state.message}</h3></li>
                <li><h3>My Name is:{this.props.name}</h3></li>
            </ul>
            </div>
        )
    }

}
export default ClassComponent;

