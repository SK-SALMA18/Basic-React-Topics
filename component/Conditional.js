import React from "react";
function EvenNumber() {
	return <h2>IsEven!</h2>;
}
function OddNumber() {
	return <h2>IsNotEven!</h2>;
}
function Conditional(props) {
    const isEven = props.isEven;
    if (isEven) {
      return <EvenNumber/>;
    }
    return <OddNumber/>;
  }
  export default Conditional;