import React, { useState } from 'react'

const Addcontacts = ({handleContacts}) => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    const handleSubmit = ()=>{
        if(name.length && email.length){
            handleContacts(name,email)
            setName("")
            setEmail("")
        }else{
            return 0
        }
        
    }

  return (
    <div>
        <input type="text" value = {name} placeholder='Enter name' onChange={(e)=>setName(e.target.value)} />
        <input type="text" value = {email} placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)} />
        <button onClick={handleSubmit} >Add</button>
    </div>
  )
}

export default Addcontacts