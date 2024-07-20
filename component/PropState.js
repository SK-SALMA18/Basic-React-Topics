import React, { Component } from 'react'
class PropState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Salma",
         age:21,
         skill:"I am Software Developer"
      }
    }
    
  render() {
    return (
      <div className='Propstate'>
        <h1>Name:{this.state.name}</h1>
        <h1>Age:{this.state.age}</h1>
        <h1>Skill:{this.state.skill}</h1>
        <h1>{this.props.Message}</h1>
        <h1>I am {this.state.name}.I am {this.state.age} years old and {this.state.skill}</h1>
      </div>
    )
  }
}

export default PropState
