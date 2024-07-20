import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import FunctionComponent from './component/FunctionComponent';
import ClassComponent from './component/ClassComponent';
import PropState from './component/PropState';
import SetState from './component/SetState';
import StateExample from './component/StateExample';
import EventHandler from './component/EventHandler';
import BindingEvents from './component/BindingEvents';
import FormHandler from './component/FormHandler';
import ConditionalStatement from './component/ConditionalStatement';
import ListRendering from './component/ListRendering';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const AppLayout=()=>
{
  return(
    <div className="applayout">
      <FunctionComponent Name={"Salma Shaik"}/>
      <ClassComponent/> 
      <PropState Message={"Hi How are You!.."}/>
      <SetState /> 
      <StateExample /> 
       <EventHandler />
      <BindingEvents />
      <FormHandler />
      <ConditionalStatement/>
      <ListRendering/> 
    </div>
  )
}
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);