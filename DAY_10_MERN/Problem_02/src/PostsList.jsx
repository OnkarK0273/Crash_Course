import React from 'react'
import useFetch from './hooks/useFetch'

const PostsList = () => {
    let url = 'https://jsonplaceholder.typicode.com/posts'
    const [data,loading,error] = useFetch(url)
    
  return (
    <div>
        <p>{loading?"....Loading please wait":false}</p>
        <p>{error?"Something went wrong":false}</p>
        {
            data?.map((el,i)=>(<p  key={el.id} >{i+1} {el.title}</p>))
        }
    </div>
  )
}

export default PostsList