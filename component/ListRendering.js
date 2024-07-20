import React from 'react'
function ListRendering() {
    const person =[
        {
            id:1,
            name:'salma',
            age:22,
            skill:'React'
        },
        {
            id:2,
            name:'vasu',
            age:24,
            skill:Node.js
        },
    ]
  return (
    <div>
        <h2>{person.id}</h2>
    </div>
  )
}

export default ListRendering
