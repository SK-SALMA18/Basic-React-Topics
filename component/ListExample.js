import React from "react";
function Fruit(props) {
    return <li>I like { props.name }</li>;
  }
  
  function ListExample() {
    //const fruits = ['Apple','Mango','Grapes'];
    const fruits = [
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Banana'},
    {id: 3, name: 'Mango'}
    ]
    return (
      <>
        <h2>Hi this is a list example</h2>
          <ul>
          {/* {fruits.map((fruit) => <Fruit name={fruit} />)} */}
          {fruits.map((fruit) => <Fruit key={fruit.id} name={fruit.name} />)}
        </ul>
      </>
    );
  }
export default ListExample;