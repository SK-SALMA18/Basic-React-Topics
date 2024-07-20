import React, { Component } from 'react'
class ConditionalStatement extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoggedIn:true
      }
    }
//   render(){
//     if (this.state.isLoggedIn){
//         return(
//             <div>Welcome Hello to if statement...</div>
//         )
//     }
//     else {
//         return(
//             <div>Welcome to else statement...</div>
//         )
//     }
//   }
// 
//Element Variable:
// render() {
    // let Message
    // if(this.state.isLoggedIn){
    //     return(
    //     Message=<div>Hi Welcome to if element varaible</div>
    //     )
    // }
    // else{
    //     return(
    //     Message=<div>Hi Welcome to else element varaible </div>
    //     )
    // }

//Teneray Conditional:
// render() {
//     return
//     this.state.isLoggedIn ? (
//         <div>Hello</div>
//     ) : (<div>Hiii</div>)
// }
//Short-cricuit :
render(){
    return
        this.state.isLoggedIn && <div>Hii</div>
}
}
export default ConditionalStatement
