import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./ts";
import './assets/style/base.scss'
 import "./scss.scss";



const App = () => {

return <div className="container">
    <h1 >webpack courses</h1>
    <MyComponent/>

  </div>
};

ReactDOM.render(<App />, document.getElementById("app"));

