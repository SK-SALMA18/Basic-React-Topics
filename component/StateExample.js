import React, { Component } from 'react'
	
// class StateExample extends Component { 
// constructor(props){ 
// 	super(props) 
// 	// Set initial state 
// 	this.state = { 
// 	count: 0 
// 	} 
// 	// Binding this keyword 
// 	this.increment = this.increment.bind(this) 
// } 
// increment(){ 
// 	// Changing state 
// 	this.setState((prevState) => { 
// 	return { count: prevState.count + 1} 
// 	}) 
// } 
// render(){ 
// 	return ( 
// 	<div> 
// 		<h2>Click Counter</h2>		 
// 		<p>Count-{this.state.count}</p> 
// 		{/* Set click handler */} 
// 		<button onClick={this.increment}> 
// 		Click me! 
// 		</button> 
// 	</div> 
// 	) 
// } 
// } 
// export default StateExample


 class StateExample extends Component {
    constructor(props) {
      super(props)
      this.state = {
         count : 0
      }
    }
    increment() {
    //    this.setState(
    //     {
    //         count:this.state.count+1
    //     },()=>{console.log('Callback value',this.state.count)}
    //    )
    //     console.log(this.state.count)
    this.setState((prevState,props)=>({
        count:prevState.count+1
    }))
    console.log(this.state.count)
    } 
    decrement() {
      this.setState((prevState,props)=>({
        count:prevState.count-1
      }))
      console.log(this.state.count)
    }
  render() {
    return (
      <div>
        <h2 style={{textAlign:"center"}}>Count Value</h2>
        <p style={{textAlign:"center"}}>Count : {this.state.count}</p>
        <button onClick={()=> this.increment()}>
                Increment
        </button>
        <button onClick={()=> this.decrement()}>
                Decrement
        </button>
      </div>
    )
  }
}
export default StateExample



