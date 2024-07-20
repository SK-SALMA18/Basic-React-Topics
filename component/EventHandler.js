import React, { Component } from 'react'
class EventHandler extends Component {
    ClickHandler() {
        console.log("Clicked the Button")
    }
  render() {
    return (
      <div style={{textAlign:"center"}}>  
        <button onClick={this.ClickHandler}>Click</button>
      </div>
    )
  }
}
export default EventHandler
