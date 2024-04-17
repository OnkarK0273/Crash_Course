import React, { useState } from 'react'

const EditProfile = ({setEmail,setName}) => {
const [name, setNameValue] = useState("")
const [email, setEmailValue] = useState("")


    const handleSubmit = ()=>{
        setEmail(email)
        setName(name)
        setNameValue("")
        setEmailValue("")
    }

  return (
    <div>
        <input type="text" value={name} placeholder='Enter name' name='name' onChange={(e)=>setNameValue(e.target.value)} />
        <input type="email" value={email} placeholder='Enter email' name='email' onChange={(e)=>setEmailValue(e.target.value)}/>
        <button onClick={handleSubmit} >Edit</button>
    </div>
  )
}

export default EditProfile