import React, { useState } from "react";
import data from "./data.json"
import App from "./App.js"
const Button1 = () => {

    const [button, setButton] = useState(true);
    const inc = () => {
        setButton(button=>!button)
      };
    return (

    <div className="button response">

        <button className="button" key={button.value} 

        >Hi</button>

    </div>

    );

};

export default Button1;