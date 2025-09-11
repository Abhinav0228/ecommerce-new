import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    const {userid} = useParams()
  return (
    <div className='custom-container py-[80px]'>User {userid}</div>
  )
}

export default User;