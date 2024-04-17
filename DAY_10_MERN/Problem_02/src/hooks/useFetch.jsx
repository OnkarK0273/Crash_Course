import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)


    const handleAPI = async()=>{
        setLoading(true)
        try{
            let res = await fetch(url)
            let data =await res.json()
            setData(data)
            setLoading(false)

        }catch(err){
            setError(true)
            setLoading(false)
        }

    }

    useEffect(()=>{
        handleAPI()
    },[])

  return [data,loading,error]
}

export default useFetch