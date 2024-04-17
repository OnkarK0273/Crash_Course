import React from 'react'

const List = ({data}) => {
  return (
    <ul>
        {
           data?.map((el)=><li style={{textAlign:"left"}} key={el.id}>{el.name+" "+el.email}</li>)
        }
    </ul>
  )
}

export default List