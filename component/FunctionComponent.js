import React from 'react'

function FunctionComponent(props) {
  return (
    <div id="class">
      <h1 style={{color: "blue"}}>Welcome To Functional Component</h1>
      <h2>My Name is : {props.Name}</h2>
    </div>
  )
}
export default FunctionComponent