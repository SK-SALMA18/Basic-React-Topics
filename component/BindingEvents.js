import React, { Component } from 'react'
class BindingEvents extends Component {
    constructor(props) {
      super(props)
      this.state = {
         message:"Hello Welcome To Binding Events"
      }
      this.clickHandler = this.clickHandler.bind(this) 
    }
    // 4 method..
    clickHandler =()=> {
        this.setState({
            message:"Bye Take Care!..."
        })
        console.log(this)
    }
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <h3>BINDING EVENTS EXAMPLE</h3>
        <p>Message:{this.state.message}</p>
        {/* <button onClick={this.clickHandler.bind(this)}>Click Button</button> 1-method*/ }
        {/* <button onClick={()=> this.clickHandler()}>Click</button> 2-method*/}
        {/* <button onClick={this.clickHandler}>Click Here...</button> 3-method */}
        <button onClick={this.clickHandler}>Click Here...</button>
      </div>
    )
  }
}

export default BindingEvents
