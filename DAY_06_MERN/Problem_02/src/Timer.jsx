import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Timer = ({toggle}) => {
const [timer,setTimer] = useState(10)
const ref = useRef(null)

const timerstart = ()=>{
    if(ref.current !== null){
        return
    }

    ref.current = setInterval(()=>{
        

        setTimer((prw)=>{
            if(prw <= 1){
                timerStop
                return 0
            }
            return prw-1
        })

    },1000)
}

const timerStop = ()=>{
    clearInterval(ref.current)
    ref.current = null
}

useEffect(()=>{

    timerstart();

    const cleanup = () => {
        timerStop();
      };
      return cleanup;
    
    
},[toggle])

    return (
    <div>
        <h1>Timer page</h1>
        <h2>{timer}</h2>
    </div>
  )
}

export default Timer