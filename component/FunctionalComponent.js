import React from "react";
const FunctionalComponent=(props)=>{
    return(
        <div className="funcomp">
            <h2 style={{background:"lightgreen"}}>Welcome to Functional Component</h2>
            <h3>Example:{props.model}</h3>
        </div>
    )
}
export default FunctionalComponent;