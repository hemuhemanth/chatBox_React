/*import React, { useState } from "react";
import { BsEmojiSmile, BsMenuButton } from "react-icons/bs";
import "./App.css";
import data from "./data.json";

const Chatbot = () => {
  const [messages, setMessages] = useState([data.welcome]);
  const [show,setShow]=useState(true);
  //const [isActive, setIsActive] = useState(false);
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };
  
  return (
    <center>
      <div className="chatbot">
        {messages.map((sus) => (
          <div>
            <p>{sus.title}</p>

            {sus.children.map((button) => (
              {visible && (
                <button  
                    key={button.title} 
                      onClick={() => {removeElement,setMessages([...messages,sus[button.value]])}}
                            >
                              {show && button.title}
              
                            </button>
              )}
            ))}
             
            
              {sus.children.map((button) => (
               show && <h4> button.title </h4>                 
              ))}
            
          </div>

        )
        )}
      </div>
    </center>
  );
};

export default Chatbot;


import { truncateSync } from "fs";
import React, { useState } from "react";
//import { BsEmojiSmile, BsMenuButton } from "react-icons/bs";
import "./App.css";
import data from "./data.json";

const Chatbot = () => {
  const [messages, setMessages] = useState([data.welcome]);
  const [show, setShow] = useState(true);
  const [isActive, setActive] = useState(false);
  

  const handleToggle = () => {
    //setActive(!isActive);
    if(setActive==true){
    setActive(true);}
    else{
      setActive(false);
    }
  };
  
  return (
    <center>
      <div className="chatbot">
        {messages.map((sus) => (
          <div>
            <p>{sus.title}</p>
            {sus.children.map((button) => (
              <button className= {`button-${isActive ? "hidden" : "success "}`}
                key={button.title}
                onClick={() => {
                  setMessages([...messages, sus[button.value]]);
                  handleToggle();
                  const el = document.getElementsByClassName('text none')[0];
                  el.className = el.className === 'text none' ? 'text' : 'text none';
                  const e=document.get
                }}
              >
                {show && button.title}
              </button>
            ))}
            {sus.children.map((button) => show && <h4 className="text none"> {button.title} </h4>)}
          </div>
        ))}
      </div>
    </center>
  );
};

export default Chatbot;

import React, { useState } from "react";
import { BsEmojiSmile, BsMenuButton } from "react-icons/bs";
import "./App.css";
import data from "./data.json";

const Chatbot = () => {
  const [messages, setMessages] = useState([data.welcome]);
  const [show, setShow] = useState(true);
  const [isActive, setActive] = useState(false);
  const [count,setCount]=useState(0);
  const inc=()=>{
    setCount(count+1)
  }
  const handleToggle = () => {
    setActive(!isActive);
  };
  
  return (
    <center>
      <div className="chatbot">
        {messages.map((sus) => (
          <div>
            <p>{sus.title}</p>
            {sus.children.map((button) => (
              <button className= 'button'
                key={button.title}
                onClick={() => {
                  setCount:count+1;
                  setMessages([...messages, sus[button.value]]);
                  const el = document.getElementsByClassName('text none')[count];
                  el.className = el.className === 'text none' ? 'text' : 'text none';
                  const e = document.getElementsByClassName('button')[0];
                  e.className = e.className === 'button' ? 'button none' : 'button';
                  inc();
                }}
              >
                {show && button.title}
              </button>
            ))}
            {sus.children.map((button) => show && <h4 className="text none"> {button.title} </h4>)}
          </div>
        ))}
      </div>
    </center>
  );
};

export default Chatbot;

import { render } from "@testing-library/react";
import React, { useState,useCallback, useMemo } from "react";
import { BsEmojiSmile, BsMenuButton } from "react-icons/bs";
import "./App.css";
import data from "./data.json";

const Chatbot = () => {
  const [messages, setMessages] = useState([data.welcome]);
  const [show, setShow] = useState(true);

  const [count, setCount] = useState(0);
  const inc = () => {
    setShow(show=>!show)
  };
  const [state,setState] = useState(true);
  render()
  { sus.children.map(
    (button) =>{
    const buttonText=this.state.visible ? button.title : null;
    });

  return (
    <center>
      <div className="chatbot">
        {messages.map((sus) => (
          
          <div>
            <p>{sus.title}</p>
            {sus.children.map((button) => (

              <button
                className="button" 
                key={button.title}
                onClick={() => {
                  setMessages([...messages, sus[button.value]]);
                  this.button.state[count]=1;
                  
                  /*const e = document.getElementsByClassName("button")[count];
                  e.className =
                    e.className === "button" ? "button none" : "button";
                  const el = document.getElementsByClassName("text none")[0];
                  el.className =
                    el.className === "text none" ? "text" : "text none";
                  
                    inc();
                }}
              >
                {button.state===0? button.title:null}
              </button>
            ))}
           
            {sus.children.map(
              (button) =>
                button.state==0 && <h4 className="button1"> {button.title} </h4>
                
            )}
          </div>
        ))}
      </div>
    </center>
  );
};
}
export default Chatbot;
*/
/*
import React, { useState,useCallback, useMemo, Suspense } from "react";
import { BsEmojiSmile, BsMenuButton } from "react-icons/bs";
import "./App.css";
import data from "./data.json";
const ChatbotResponse = ({
title,
description,
children,
anOptionClick,
},ChatbotResponseProps) => {
  const [showOptions, setShowOptions]= useState(true);
  const handleButtonClick=(option,Ioption) => {
  //onOptionClick(option);
  setShowOptions(false);
  };
  
  
  const message = button.title ? button.title + '\n\n' + description: button.title;
  
  return (
  
  <div className="chatbot-response">
  
 
  <p> {sus.title}</p>
  
  {showOptions && (
  
  <div className="button-container">
  
  {children.map((sus) => (
  
  <button
  
  className="button"
  
  key ={sus.title}
  
  onclick={()=> handleButtonClick(sus)}
  >
  {sus.title}

</button>
  ))}
</div>
  )}
</div>

);

};

export default ChatbotResponse;
*/

import React, { useState } from "react";
import { BsEmojiSmile, BsMenuButton } from "react-icons/bs";
import "./App.css";
import "./Button1.js";
//import Button1 from "./Button1.js";
import data from "./data.json";

const Chatbot = () => {
  const [messages, setMessages] = useState([data.welcome]);
  const [show, setShow] = useState(false);
  const [display,setDisplay] = useState(false);
  const [active,setActive]=useState(true);
  const handleToggle = () => {
    //setActive(!setActive);
    if(active==true){
    setActive(false);}
    else{
      setActive(true);
    }
  };
  //const uio=()=>{setActive(true);console.log(active)};
  return (
    <center>
      <div className="chatbot">
        {messages.map((sus) =>  (
          <div>
            <p>{sus.title}</p>
           
            {!display&&(
              <div className="button">
                {sus.children.map((button) => (
              //    uio=()=>{setActive(true);console.log("yuij")},
              
                 
           active ?   <button 
                key={button.value}
                
                onClick={() => {
                 setMessages([...messages, sus[button.value]]);
                  setShow(<h4>{button.title}</h4>);
                  //setDisplay(false);
                  handleToggle();
                  setActive(true);
                     
                }}
                
              > 
              {button.value} 
                </button> : null
                
              ))
               } </div>
            )}
            {sus.children.map((button) => show && <h4> {button.title} </h4>) }
          </div>
          
        ))}
      </div>
    </center>
  );
};

export default Chatbot;

/*
import React, { useState } from "react";
import { BsEmojiSmile, BsMenuButton } from "react-icons/bs";
import "./App.css";
import "./Button1.js";
//import Button1 from "./Button1.js";
import data from "./data.json";

const Chatbot = () => {
  const [messages, setMessages] = useState([data.welcome]);
  const [show, setShow] = useState(false);
  const [display,setDisplay] = useState(false);
  const [active,setActive]=useState(true);
  const handleToggle = () => {
    //setActive(!setActive);
    if(active==true){
    setActive(false);}
    else{
      setActive(true);
    }
  };
  const uio=()=>{setActive(true);console.log(active)};
  messages.map((sus)=>{
  
    
      return (
        <center>
      <div className="chatbot">
          <div>
            <p>{sus.title}</p>
           
            {!display&&(
              <div className="button">
                {sus.children.map((button) => (
              
                 
           active ?   <button 
                key={button.value}
                
                onClick={() => {
                 setMessages([...messages, sus[button.value]]);
                  setShow(<h4>{button.title}</h4>);
                  //setDisplay(false);
                  handleToggle();
                  setActive(true);
                     
                }}
                
              > 
              {button.value} 
                </button> : null
                
              ))
               } </div>
            )}
            {sus.children.map((button) => show && <h4> {button.title} </h4>) }
          </div>
          
        
        
      </div>
    </center>
      );})
  
};

export default Chatbot;
*/