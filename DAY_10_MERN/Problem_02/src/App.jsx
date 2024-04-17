import { useState } from 'react'

import './App.css'
import PostsList from './PostsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Custom Hooks</h2>
      <PostsList/>
    </>
  )
}

export default App
