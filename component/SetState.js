import React, { Component } from 'react'
class SetState extends Component { 
constructor(props){ 
	super(props) 
	this.state = {
    greeting : 
		'Click the button'}  
	this.updateState = this.updateState.bind(this) 
} 	
updateState(){ 
	this.setState({greeting : 
				'hi welcome...!!'}) 
} 	
render(){ 
	return ( 
	<div> 
	<h2 style={{textAlign:"center"}}>Greetings</h2> 
	<p style={{textAlign:"center"}}>{this.state.greeting}</p> 
		<button onClick={this.updateState} > 
		Click me! 
		</button> 
	</div> 
	) 
} 
} 
	
export default SetState; 
