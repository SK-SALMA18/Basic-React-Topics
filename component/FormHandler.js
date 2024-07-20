import React, { Component } from 'react'
class FormHandler extends Component {
    constructor(props) {
      super(props)
      this.state = {
         Firstname:'',
         Lastname:'',
      }
    }
 handleFirstnameChange=event=>{
    this.setState({
        Firstname:event.target.value
    })
 }   
 handleLasttnameChange=event=>{
    this.setState({
        Lastname:event.target.value
    })
 }  
 handleSubmit=(event)=>{
    alert('$(this.state.Firstname)','$(this.state.Lastname)',event.PreventDefault())}
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <div style={{textAlign:"center"}}>
        <h3>FORM HANDLER</h3>
        <label>Firstname : </label>
        <input type='text' name="Firstname" value={this.state.Firstname} onChange={this.handleFirstnameChange}/><br></br> <br></br>
        <label>Lastname : </label>
        <input type='text' name="Lastname" value={this.state.Lastname} onChange={this.handleLasttnameChange}/><br></br> <br></br>
        <button type='submit'>Submit</button>
      </div>
    </form>
    )
  }
}
export default FormHandler
