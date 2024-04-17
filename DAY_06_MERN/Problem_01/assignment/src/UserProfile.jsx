import React from 'react'

const UserProfile = ({name,email}) => {
  return (
    <div>
        <h2>name:{name}</h2>
        <h2>email:{email}</h2>
    </div>
  )
}

export default UserProfile