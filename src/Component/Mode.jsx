import React, { useEffect, useState } from "react";

import Clock from "./Clock";
import './Clock.css';
import CountDown from "./Timer";
export function TimerMode(){
  const [Page,setPage]=useState(<Clock/>);
  const [status,setStatus]=useState(false);
  function Clicked(evt){
      evt.preventDefault();
      if(status==false){
          setStatus(true)
          setPage(<CountDown/>)
          console.log(status);
      }
      if(!status==false){
          setStatus(false)
          setPage(<Clock/>)
          console.log(status);
      }
  }
  return(<>
      {Page}
      <button className="mode button-primary" onClick={Clicked}>Change mode</button>
      </>
  )
}