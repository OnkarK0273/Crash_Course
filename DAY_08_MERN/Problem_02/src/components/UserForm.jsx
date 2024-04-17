import React, { useRef, useState } from 'react'

const UserForm = () => {
    const [name, setName] = useState("")
    const [validation,setValidation] = useState(false)
    const inputRef = useRef(null)

    const handleForm = ()=>{
        console.log("name :",name)
        console.log("email :",inputRef.current.value)
        if(name.length<=3){
            setValidation(true)
        }else{
            setValidation(false)
        }
    }


  return (
    <div  style={{display:"flex" , flexDirection:"column",width :"20%",gap:"10px"}} >
        <label>Enter name:</label>
        <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} />
        {validation && <p style={{color:"red"}} >Name is at least 3 characters long.</p>}
        <label>Enter email:</label>
        <input type="email"   ref={inputRef} />
        <button onClick={handleForm} >Submit</button>
    </div>
  )
}

export default UserForm