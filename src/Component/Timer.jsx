import React, { useEffect, useState } from "react";
import Input, { Decrementer } from "./Data";

function CountDown(){
    const [data,setData]=useState(<Input />);
  
    const timer={
        start(e){
          e.preventDefault()
            setData(<Decrementer/>)
        },
        reset(){
          setData(<Input/>)
        }
    }
    return(
      <>
      {data}
      <div>
      <button className="button" onClick={timer.start} >START</button>
      <button className="button-reset" onClick={timer.reset}>reset</button>
      </div>
      </>
    )
  }

  export default CountDown;