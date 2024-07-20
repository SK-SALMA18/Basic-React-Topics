import React from "react";
import  ReactDOM  from "react-dom/client";
import FunctionalComponent from "./component/FunctionalComponent";
import ClassComponent from "./component/ClassCopmponent";
// import './style.css';
import mystyle from './mystyle.module.css';
import EventExample from "./component/EventsExample";
import Conditional from "./component/Conditional";
import ListExample from "./component/ListExample";
import FormExample from "./component/FormExample";
const AppLayout = () =>
{
    return(
        <div className={mystyle.bigblue}>
            <FunctionalComponent model={"this is a functional props"}/>
            <ClassComponent name={"Salma Shaik"}/>
            {/* <EventExample/>
            <Conditional isEven={false}/>
            <ListExample/>
            <FormExample/> */}
        </div>
    )
}
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);