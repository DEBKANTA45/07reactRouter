import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"



function Github() {
    const data = useLoaderData()
    
//     const [data, setdata] = useState( [] )
//    useEffect(() => {
//    fetch('https://api.github.com/users/DEBKANTA45')
//    .then(response => response.json())
//    .then(data =>{
//     console.log(data);
//     setdata(data)
    
//    })
//    }, [])
   
    
  return (
    <div className='bg-gray-600 text-center text-white text-3xl m-4 p-4 rounded-md'>
      Github followers: {data.followers}
      <img className="rounded-md" src= {data.avatar_url} alt="Git Profile" width={300} />
    </div>
  )
}

export default Github
export const githubUInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/DEBKANTA45')
    return response.json()
}
