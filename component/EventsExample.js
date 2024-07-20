import React from "react";
function EventExample() {
    const greet = () => {
      alert(" Hi Hello Welcome to Event Page");
    }
    const style1 = {backgroundColor: 'salmon'};
    const style2 = {fontSize: '2rem'};
    const style3 = {color: 'white'};
    return (
        <div className="events">
            <h2 style={{...style1,...style2,...style3}}>Events In React</h2>
      <button onClick={greet}>Click</button>
      </div>
    );
  }
  export default EventExample;