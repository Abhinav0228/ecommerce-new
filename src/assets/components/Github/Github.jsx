import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
const Github = () => {
  const data = useLoaderData()
  // const [data, setData] = useState([]);

  // useEffect (() => {
  //   fetch ('https://api.github.com/users/Abhinav02281').then(response => response.json()).then(data => {
  //       setData(data)
  //     })
  // },[])

  return (
    <div className='text-center m-4 bg-amber-600 text-2xl'>github followers:
    {
      data.followers 
      ? 
      <h2>{data.followers}</h2>
      :
      <p>no data</p>
    }
    
     </div>
  )
}

export default Github;

export const githubLoader = async () => {
  const response = await fetch ('https://api.github.com/users/hiteshchoudhary')
  return response.json();
}