import React, { useEffect, useState } from "react";

function Input(){
    let take={
      hours(e){
        e.preventDefault()
        heure=e.target.value;
      },
      minutes(e){
        e.preventDefault()
        minute=e.target.value;
      },
      seconds(e){
        e.preventDefault()
        seconde=e.target.value;
      }
    }
      return(
        <div className="data">
      <input placeholder="00" maxLength={2} onInput={take.hours}></input>:
      <input placeholder="00" maxLength={2} onInput={take.minutes}></input>:
      <input placeholder="00" maxLength={2} onInput={take.seconds}></input>
      </div>
      )
  }
  

let heure=0;
let minute=0;
let seconde=0;

export function Decrementer(){
  const [[h,m,s],setTime] = useState([heure,minute,seconde])
    let test;
    

    useEffect( ()=>{test = setInterval(()=>{
      if(h===0&&m===0&&s===0){
        clearInterval(test)
        alert('Veillez (re)définir le temps que vous voulez décompter')
      }
      else if(m==0&&s==0){
        setTime([h,-1,59,59])
      }
      else if(s==0){
        setTime([h,m-1,59])
      }
      else{
        setTime([h,m,s-1])
      }
    },1000);
  return ()=>{
    clearInterval(test)
  }
})

   function Stop(){
     clearInterval(test);
   }
    return (
      <>
        <span>{h.toString().padStart(2, "0")}</span>:
        <span>{m.toString().padStart(2, "0")}</span>:
        <span>{s.toString().padStart(2, "0")}</span>
        <div>
        <button className="stop" onClick={Stop}>STOP</button>
        </div>
      </>
    )
}

  export default Input;
