import { useState } from 'react'
import UserProfile from './UserProfile'
import EditProfile from './EditProfile'


function App() {
  const [toggle, setToggle] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <>
      <h1>{toggle?"view mode":"edit mode"}</h1>
      {
        toggle?<UserProfile  name={name} email={email}  /> :<EditProfile setName={setName} setEmail={setEmail}  />
      }
      
      <button onClick={()=>setToggle(!toggle)} >Toggle</button>
    </>
  )
}

export default App
